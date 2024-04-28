import { FC } from "react";
import { Button, Form, Input } from "antd";
import useAuth from "@/hooks/useAuth";
import { Rule } from "antd/es/form";
import FormLayout from "../FormLayout";
import { Link } from "@tanstack/react-router";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

interface FormFields {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const [form] = Form.useForm();
  const { login } = useAuth(form);

  const rules: Record<keyof FormFields, Rule> = {
    email: { required: true, message: "Email не должен быть пустым" },
    password: { required: true, message: "Пароль не должен быть пустым" },
  };

  const onFinnish = (values: FormFields) => {
    login(values);
  };

  return (
    <FormLayout
      onFinish={onFinnish}
      title="Авторизация"
      titleSuffix={
        <Link to="/registration" className={styles["redirect-link"]}>
          Ещё нет аккаунта?
        </Link>
      }
      form={form}
    >
      <Form.Item<FormFields> name="email" rules={[rules.email]}>
        <Input
          size="large"
          autoFocus
          placeholder="Email"
          suffix={<MailOutlined />}
        />
      </Form.Item>
      <Form.Item<FormFields> name="password" rules={[rules.password]}>
        <Input.Password
          size="large"
          placeholder="Пароль"
          suffix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: "100%" }}
        >
          Авторизироваться
        </Button>
      </Form.Item>
    </FormLayout>
  );
};

export default LoginForm;
