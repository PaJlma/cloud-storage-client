import { FC, useState } from "react";
import { ProfileCardProps } from "./types";
import {
  Button,
  ColorPicker,
  Flex,
  Form,
  FormProps,
  Input,
  Typography,
} from "antd";
import styles from "./styles.module.scss";
import { EditFilled } from "@ant-design/icons";
import Logotype from "../Logotype";
import { axiosWRA } from "@/utils/axios/axiosWRA";
import useNotification from "antd/es/notification/useNotification";
import { Color } from "antd/es/color-picker";
import { useForm } from "antd/es/form/Form";

interface FormFields {
  login: string;
  name: string;
  lastName: string;
  color: Color;
}

const ProfileCard: FC<ProfileCardProps> = ({ account, fetchAccount }) => {
  const [editMode, setEditMode] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [api, contextHolder] = useNotification();
  const [form] = useForm<FormFields>();

  const submitHandler: FormProps<FormFields>["onFinish"] = async (values) => {
    const data = {
      login: values.login ?? account.login,
      name: values.name ?? account.name,
      lastName: values.lastName ?? account.lastName,
      color: values.color?.toHexString() ?? account.color,
    };

    if (!data.login) {
      form.setFields([
        { name: "login", errors: ["Логин не должен быть пустым"] },
      ]);
      return;
    }

    setIsFetching(true);
    try {
      await axiosWRA.patch("http://localhost:5000/auth/edit", data);
      await fetchAccount();
      setEditMode(false);
      api.success({
        message: "Профиль успешно обновлен",
        placement: "bottomLeft",
      });
    } catch {
      api.error({
        message: "Произошла ошибка при обновлении профиля :(",
        placement: "bottomLeft",
      });
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <Flex vertical className={styles["body"]} gap={30}>
      {contextHolder}
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={20}>
          <Logotype />
          <Typography.Text className={styles["title"]}>Профиль</Typography.Text>
        </Flex>
        {!editMode && (
          <Button
            icon={<EditFilled />}
            type="text"
            onClick={() => setEditMode(true)}
          />
        )}
      </Flex>
      <Form onFinish={submitHandler} form={form}>
        <Form.Item<FormFields> name="login" label="Логин">
          <Input
            onChange={() => form.setFields([{ name: "login", errors: [] }])}
            defaultValue={account.login}
            disabled={!editMode}
          />
        </Form.Item>
        <Form.Item<FormFields> name="name" label="Имя">
          <Input defaultValue={account.name} disabled={!editMode} />
        </Form.Item>
        <Form.Item<FormFields> name="lastName" label="Фамилия">
          <Input defaultValue={account.lastName} disabled={!editMode} />
        </Form.Item>
        <Form.Item<FormFields> name="color" label="Цвет аватара">
          <ColorPicker disabled={!editMode} defaultValue={account.color} />
        </Form.Item>
        <Form.Item label="Почта">
          <Input defaultValue={account.email} disabled />
        </Form.Item>
        {editMode && (
          <Form.Item>
            <Button
              loading={isFetching}
              htmlType="submit"
              type="primary"
              size="large"
            >
              Применить
            </Button>
          </Form.Item>
        )}
      </Form>
    </Flex>
  );
};

export default ProfileCard;
