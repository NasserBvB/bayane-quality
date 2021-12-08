import { InboxOutlined } from "@ant-design/icons";
import { Form, Input, message } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React from "react";

export const DocumentForm = () => {
  const [form] = Form.useForm();
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <Form
      form={form}
      layout="vertical"
      name="form_in_modal"
      initialValues={{ modifier: "public" }}
    >
      <Form.Item name="title" label="Désignation du document">
        <Input type="textarea" placeholder="Désignation du document" />
      </Form.Item>

      <Form.Item name="code" label="Code">
        <Input type="textarea" placeholder="Code" />
      </Form.Item>

      <Form.Item name="version" label="Version">
        <Input type="textarea" placeholder="Version" />
      </Form.Item>

      <Form.Item name="date_creation" label="Date de la mise en place">
        <Input type="textarea" placeholder="Date de la mise en place" />
      </Form.Item>

      <Form.Item name="author" label="Rédacteur">
        <Input type="textarea" placeholder="Rédacteur" />
      </Form.Item>

      <Form.Item name="verificateur" label="Vérificateur">
        <Input type="textarea" placeholder="Vérificateur" />
      </Form.Item>

      <Form.Item name="approbateur" label="Approbateur">
        <Input type="textarea" placeholder="Approbateur" />
      </Form.Item>

      <Form.Item name="diffusion" label="Diffusion/ Point d'utilisation">
        <Input type="textarea" placeholder="Diffusion/ Point d'utilisation" />
      </Form.Item>
      <Form.Item name="diffusion" label="Attachements">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Cliquer ou glisser le/les fichier(s) ici pour le(s) charger
          </p>
          <p className="ant-upload-hint">
            Il supporte le chargement de plusieurs fichier en même temps.
          </p>
        </Dragger>
      </Form.Item>
    </Form>
  );
};
