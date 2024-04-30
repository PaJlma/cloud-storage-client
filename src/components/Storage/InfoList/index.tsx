import { FC, useState } from "react";
import { InfoListProps } from "./types";
import {
  Button,
  Divider,
  Flex,
  Input,
  Modal,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import { DeleteFilled, FileAddFilled, FolderFilled } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { useSearch } from "@tanstack/react-router";
import useNotification from "antd/es/notification/useNotification";

const InfoList: FC<InfoListProps> = ({
  entitiesCount,
  deleteFile,
  uploadFile,
  selected,
  createFolder,
}) => {
  const { path } = useSearch({ from: "/storage/my" });
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isCreateFolderModalOpened, setIsCreateFolderModalOpened] =
    useState(false);
  const [api, notificationContextHolder] = useNotification();
  const [isFileLoading, setIsFileLoading] = useState(false);
  const [isFileDeleting, setIsFileDeleting] = useState(false);
  const [isFolderCreating, setIsFolderCreating] = useState(false);
  const [folderName, setFolderName] = useState("");

  const onDeleteHandler = async () => {
    if (!selected) {
      api.warning({
        message: "Не выбран файл для удаления",
        placement: "bottomLeft",
      });
      return;
    }
    setIsModalOpened(true);
  };

  const onUploadChangeHandler: UploadProps["onChange"] = (info) => {
    setIsFileLoading(true);
    if (info.file.status === "done") {
      setIsFileLoading(false);
    } else if (info.file.status === "error") {
      api.error({
        message: "Произошла ошибка при загрузке файла",
        placement: "bottomLeft",
      });
      setIsFileLoading(false);
    }
  };

  return (
    <Flex vertical className={styles["body"]} gap={10}>
      {notificationContextHolder}
      <Modal
        title={`Вы действительно хотите удалить файл ${selected}?`}
        closeIcon={null}
        onOk={async () => {
          setIsFileDeleting(true);
          try {
            await deleteFile(path + selected);
            api.success({
              message: "Файл был успешно удален",
              placement: "bottomLeft",
            });
          } catch {
            api.error({
              message: "Файл не был удален :(. Произошла ошибка",
              placement: "bottomLeft",
            });
          } finally {
            setIsFileDeleting(false);
            setIsModalOpened(false);
          }
        }}
        open={isModalOpened}
        onCancel={() => setIsModalOpened(false)}
      />
      <Modal
        title="Введите название папки"
        open={isCreateFolderModalOpened}
        onCancel={() => {
          setIsCreateFolderModalOpened(false);
          setFolderName("");
        }}
        onOk={async () => {
          if (!folderName) {
            api.warning({
              message: "Имя папки не должно быть пустым",
              placement: "bottomLeft",
            });
            return;
          }
          setIsFolderCreating(true);
          try {
            await createFolder(path, folderName);
            api.success({
              message: "Папка была успешно создана",
              placement: "bottomLeft",
            });
          } catch {
            api.error({
              message: "Папка не была создана :(. Произошла ошибка",
              placement: "bottomLeft",
            });
          } finally {
            setIsFolderCreating(false);
            setFolderName("");
            setIsCreateFolderModalOpened(false);
          }
        }}
      >
        <Input
          value={folderName}
          onChange={(event) => setFolderName(event.target.value)}
        />
      </Modal>
      <Button
        icon={<FolderFilled />}
        type="primary"
        loading={isFolderCreating}
        onClick={() => setIsCreateFolderModalOpened(true)}
        style={{ backgroundColor: "green" }}
      >
        Создать папку
      </Button>
      <Flex align="center" gap={20}>
        <Upload
          multiple={false}
          onChange={onUploadChangeHandler}
          showUploadList={false}
          customRequest={async (options) => {
            try {
              await uploadFile(path, options.file);
              api.success({
                message: "Ваш файл был успешно загружен",
                placement: "bottomLeft",
              });
            } catch {
              api.error({
                message: "Ваш файл не был загружен :(. Произошла ошибка",
                placement: "bottomLeft",
              });
            } finally {
              setIsFileLoading(false);
            }
          }}
          withCredentials
          name="file"
        >
          <Button
            type="primary"
            icon={<FileAddFilled />}
            loading={isFileLoading}
          >
            Добавить
          </Button>
        </Upload>
        <Button
          danger
          type="primary"
          loading={isFileDeleting}
          icon={<DeleteFilled />}
          onClick={onDeleteHandler}
        >
          Удалить
        </Button>
      </Flex>
      <Divider />
      <Typography.Text>{entitiesCount} файлов и папок</Typography.Text>
    </Flex>
  );
};

export default InfoList;
