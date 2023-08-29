// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

// getInitialState()返回的数据被默认注入到@@initialState的model中，可通过useModel这个hook来消费它
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'haha' };
}

export const layout = () => {
  return {
    logo: undefined,
    menu: {
      locale: true,
    }
  };
};
