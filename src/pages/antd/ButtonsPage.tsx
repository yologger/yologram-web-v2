import { DeleteOutlined, DownloadOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Typography } from 'antd';

const { Title } = Typography;

const ButtonsPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Antd Button Examples</Title>

      {/* Button Types */}
      <Title level={3}>Button Types</Title>
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>

      <Divider />

      {/* Button Sizes */}
      <Title level={3}>Button Sizes</Title>
      <Space wrap>
        <Button type="primary" size="large">
          Large Button
        </Button>
        <Button type="primary" size="middle">
          Middle Button
        </Button>
        <Button type="primary" size="small">
          Small Button
        </Button>
      </Space>

      <Divider />

      {/* Button with Icons */}
      <Title level={3}>Buttons with Icons</Title>
      <Space wrap>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button icon={<DownloadOutlined />}>Download</Button>
        <Button type="dashed" icon={<PlusOutlined />}>
          Add Item
        </Button>
        <Button danger icon={<DeleteOutlined />}>
          Delete
        </Button>
      </Space>

      <Divider />

      {/* Button States */}
      <Title level={3}>Button States</Title>
      <Space wrap>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" disabled>
          Disabled
        </Button>
        <Button type="primary" ghost>
          Ghost Button
        </Button>
      </Space>

      <Divider />

      {/* Danger Buttons */}
      <Title level={3}>Danger Buttons</Title>
      <Space wrap>
        <Button danger type="primary">
          Danger Primary
        </Button>
        <Button danger>Danger Default</Button>
        <Button danger type="dashed">
          Danger Dashed
        </Button>
        <Button danger type="text">
          Danger Text
        </Button>
        <Button danger type="link">
          Danger Link
        </Button>
      </Space>

      <Divider />

      {/* Button Groups */}
      <Title level={3}>Button Groups</Title>
      <Space direction="vertical" size="large">
        <Button.Group>
          <Button>L</Button>
          <Button>M</Button>
          <Button>R</Button>
        </Button.Group>

        <Button.Group>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button type="primary" icon={<DownloadOutlined />}>
            Download
          </Button>
        </Button.Group>
      </Space>

      <Divider />

      {/* Block Buttons */}
      <Title level={3}>Block Buttons</Title>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button type="primary" block>
          Block Primary Button
        </Button>
        <Button block>Block Default Button</Button>
        <Button type="dashed" block>
          Block Dashed Button
        </Button>
      </Space>
    </div>
  );
};

export default ButtonsPage;
