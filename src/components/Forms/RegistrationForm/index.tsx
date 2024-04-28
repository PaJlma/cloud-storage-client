import { FC } from "react";
import FormLayout from "../FormLayout";
import { Button, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "@tanstack/react-router";
import styles from "./styles.module.scss";
import { Rule } from "antd/es/form";
import useAuth from "@/hooks/useAuth";

interface FormFields {
  login: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegistrationForm: FC = () => {
  const [form] = Form.useForm();
  const { registration } = useAuth(form);

  const rules: Record<keyof Omit<FormFields, "repeatPassword">, Rule> = {
    login: { required: true, message: "Логин не должен быть пустым" },
    email: { required: true, message: "Email не должен быть пустым" },
    password: { required: true, message: "Пароль не должен быть пустым" },
  };

  const onFinnish = ({ repeatPassword, ...values }: FormFields) => {
    if (values.password !== repeatPassword) {
      form.setFields([
        { name: "repeatPassword", errors: ["Пароли не совпадают"] },
      ]);
    }
    registration(values);
  };

  return (
    <FormLayout
      onFinish={onFinnish}
      title="Регистрация"
      titleSuffix={
        <Link to="/login" className={styles["redirect-link"]}>
          Уже есть аккаунт?
        </Link>
      }
      form={form}
    >
      <Form.Item<FormFields> name="login" rules={[rules.login]}>
        <Input
          size="large"
          autoFocus
          placeholder="Логин"
          suffix={<UserOutlined />}
        />
      </Form.Item>
      <Form.Item<FormFields> name="email" rules={[rules.email]}>
        <Input size="large" placeholder="Email" suffix={<MailOutlined />} />
      </Form.Item>
      <Form.Item<FormFields> name="password" rules={[rules.password]}>
        <Input.Password
          size="large"
          placeholder="Пароль"
          suffix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item<FormFields> name="repeatPassword">
        <Input.Password
          size="large"
          onChange={() =>
            form.setFields([{ name: "repeatPassword", errors: [] }])
          }
          placeholder="Повторите пароль"
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
          Зарегистрироваться
        </Button>
      </Form.Item>
      <Typography.Text style={{ textAlign: "center", display: "block" }}>
        Регистрируясь вы соглашаетесь с нашими{" "}
        <Link to="/terms-of-use">правилами обработки данных</Link>
      </Typography.Text>
    </FormLayout>
  );
};

export default RegistrationForm;
