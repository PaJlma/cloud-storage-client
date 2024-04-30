import { FC } from "react";
import { EntityListItemProps } from "./types";
import { Button, Flex, Typography } from "antd";
import {
  DownloadOutlined,
  FileFilled,
  FileUnknownFilled,
  FolderFilled,
} from "@ant-design/icons";
import styles from "./styles.module.scss";
import { useAppSelector } from "@/hooks/redux";
import { axiosWRA } from "@/utils/axios/axiosWRA";

const EntityListItem: FC<EntityListItemProps> = ({
  entity,
  path,
  ...props
}) => {
  const { _id } = useAppSelector((state) => state.auth.account);

  return (
    <Flex {...props} className={styles["body"]} justify="space-between">
      <Flex gap={15} align="center">
        {entity.type === "dir" ? (
          <FolderFilled className={styles["icon"]} />
        ) : entity.type === "file" ? (
          <FileFilled className={styles["icon"]} />
        ) : (
          <FileUnknownFilled className={styles["icon"]} />
        )}
        <Typography.Text className={styles["text"]}>
          {entity.name}
        </Typography.Text>
      </Flex>
      {entity.type === "file" && (
        <Button
          type="text"
          shape="circle"
          icon={<DownloadOutlined />}
          onClick={async () => {
            const response = await axiosWRA.get(
              `http://localhost:5000/storage/${_id}/download?path=${path}${entity.name}`,
              {
                responseType: "arraybuffer",
              },
            );
            const blob = new Blob([response.data]);
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = entity.name;
            link.click();
          }}
        />
      )}
    </Flex>
  );
};

export default EntityListItem;
