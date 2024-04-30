import { FC } from "react";
import { EntityListProps } from "./types";
import { Breadcrumb, Empty, Flex, Spin } from "antd";
import { Link, useNavigate } from "@tanstack/react-router";
import EntityListItem from "./EntityListItem";
import styles from "./styles.module.scss";
import { HomeFilled } from "@ant-design/icons";

const EntityList: FC<EntityListProps> = ({
  list,
  path,
  isFetching,
  selected,
  setSelected,
}) => {
  const navigate = useNavigate({ from: "/storage/my" });
  const crunchedPath = path.split("/").filter((crunch) => crunch);

  return (
    <Flex vertical gap={20} className={styles["body"]}>
      <Flex align="center" gap={10}>
        <Breadcrumb
          className={styles["breadcrumb"]}
          items={[
            {
              title: (
                <Link to="/storage/my" search={{ path: "/" }}>
                  <HomeFilled />
                </Link>
              ),
            },
            ...crunchedPath.map((crunch, index) => ({
              title: (
                <Link
                  to="/storage/my"
                  search={{
                    path: `/${crunchedPath.slice(0, ++index).join("/")}/`,
                  }}
                  className={styles["breadcrumb-link"]}
                  title={crunch}
                >
                  {crunch}
                </Link>
              ),
            })),
          ]}
        />
      </Flex>
      <Flex
        vertical
        className={`${styles["list"]} ${(!list.length || isFetching) && styles["centered"]}`}
      >
        {isFetching ? (
          <Spin />
        ) : list.length ? (
          list.map((entity) => (
            <EntityListItem
              key={entity.name}
              aria-selected={selected === entity.name}
              entity={entity}
              path={path}
              onClick={() => setSelected(entity.name)}
              onDoubleClick={() =>
                entity.type === "dir"
                  ? navigate({
                      to: "/storage/my",
                      search: (previous) => ({
                        path: `${previous.path}${entity.name}/`,
                      }),
                    })
                  : null
              }
            />
          ))
        ) : (
          <Empty description="В директории нет файлов" />
        )}
      </Flex>
    </Flex>
  );
};

export default EntityList;
