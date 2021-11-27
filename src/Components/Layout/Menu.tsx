
import { DashboardOutlined, FileOutlined, FileTextOutlined } from '@ant-design/icons';
import { Layout as LayoutWrapper, Menu, Select } from 'antd';
import { useGlobal } from "Components/Providers/global.provider";
import { useHistory } from "react-router-dom";
import { IProcessus } from "types";
import { processuses } from "utils/constants";

const { Option } = Select;
const { Sider } = LayoutWrapper;
const { SubMenu } = Menu;

const menu = [
    {
        id: "40de5b81-9a90-40c6-9639-1ac4c2a52cda",
        title: "politique qualité",
        url: "/40de5b81-9a90-40c6-9639-1ac4c2a52cda",
        icon: <FileOutlined />,
        hasChildren: false,
    },
    {
        id: "203aacce-6953-46b4-a02c-319ee9307bf7",
        title: "Processus",
        url: "/203aacce-6953-46b4-a02c-319ee9307bf7",
        icon: <FileOutlined />,
        hasChildren: true,
    },
    {
        id: "203aacce-6953-46b4-a02c-319ff9307bf7",
        title: "Carte d'identité du processus",
        url: "/203aacce-6953-46b4-a02c-319ff9307bf7",
        icon: <FileOutlined />,
        parent: "203aacce-6953-46b4-a02c-319ee9307bf7",
        hasChildren: false,
    },
    {
        id: "49fb08f4-ac0c-4243-8d55-47db186b74c5",
        title: "Tableau de bord",
        hasChildren: false,
        parent: "203aacce-6953-46b4-a02c-319ee9307bf7",
        url: "/49fb08f4-ac0c-4243-8d55-47db186b74c5",
        icon: <DashboardOutlined />,
    },
    {
        id: "0ee690cd-4303-4138-ac93-d78611dc2055",
        title: "Registre des documents internes",
        parent: "203aacce-6953-46b4-a02c-319ee9307bf7",
        hasChildren: false,
        url: "/0ee690cd-4303-4138-ac93-d78611dc2055",
        icon: <FileTextOutlined />,
    },
    {
        id: "12652aa5-bc38-4042-ac14-ff414f0df191",
        parent: "203aacce-6953-46b4-a02c-319ee9307bf7",
        title: "Registre des enregistrements",
        hasChildren: false,
        url: "/12652aa5-bc38-4042-ac14-ff414f0df191",
        icon: <FileTextOutlined />,
    },
    {
        id: "95d14eb9-bb90-4182-b9e6-16b74e2454f4",
        parent: "203aacce-6953-46b4-a02c-319ee9307bf7",
        hasChildren: false,
        title: "Journal d'amélioration du processus",
        url: "/95d14eb9-bb90-4182-b9e6-16b74e2454f4",
        icon: <FileTextOutlined />,
    },
    {
        id: "3e375690-dd33-40e9-9a54-066740041647",
        hasChildren: false,
        parent: "203aacce-6953-46b4-a02c-319ee9307bf7",
        title: "Repport d'audit",
        url: "/3e375690-dd33-40e9-9a54-066740041647",
        icon: <FileTextOutlined />,
    },
    {
        id: "2825c264-a266-46c8-bcb8-1b3b8d66c976",
        hasChildren: false,
        parent: "203aacce-6953-46b4-a02c-319ee9307bf7",
        title: "Revue du processus",
        url: "/2825c264-a266-46c8-bcb8-1b3b8d66c976",
        icon: <FileTextOutlined />,
    },
    {
        id: "650443f5-9be1-4d91-a0fc-2f45aee7dd04",
        parent: null,
        hasChildren: false,
        title: "Revue de direction",
        url: "/650443f5-9be1-4d91-a0fc-2f45aee7dd04",
        icon: <FileTextOutlined />,
    },
]

export const NavigationMenu = () => {
    const { push, location: { pathname } } = useHistory();
    const navigate = (url: string) => {
        setTimeout(() => push(url), 300);
    }

    const { changeProcessus, currentProcessus } = useGlobal()

    const handleSelect = (value: string) => {
        const processus = processuses.find(processuse => processuse.id === value);
        changeProcessus(processus as IProcessus);
    }
    return <Sider
        id="components-layout-demo-side"
        width="20%"
    >
        <div
            className="logo"
        >Bayane</div>
        <Select
            defaultValue={currentProcessus?.id || processuses[0]?.id}
            onSelect={handleSelect}
            size="large"
            maxLength={200}
            showSearch
            allowClear
            className="select-current-process"
        >
            {processuses.map(item => <Option value={item.id} key={item.id}>{item.title}</Option>)}
        </Select>
        <Menu
            theme="dark"
            defaultSelectedKeys={[pathname.split('/')[1]]}
            mode="vertical"
        >
            {
                menu.map(item => {
                    if (item.hasChildren)
                    {
                        return <SubMenu key={item.id} title={currentProcessus.title} icon={item.icon}>
                            {
                                menu.map(item2 => {
                                    if (item2.parent && item2.parent === item.id)
                                    {
                                        return <Menu.Item title={item2.title} icon={item2.icon} key={item2.id} onClick={() => navigate(item2.url)}>{item2.title}</Menu.Item>
                                    }
                                    return null;
                                })
                            }
                        </SubMenu>
                    }
                    else if (!item.parent && !item.hasChildren)
                    {
                        return <Menu.Item icon={item.icon} title={item.title} key={item.id} onClick={() => navigate(item.url)}>{item.title}</Menu.Item>
                    }
                    return null;
                })
            }
        </Menu>
    </Sider>
}