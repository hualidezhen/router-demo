/**
 * 判断是否可以显示菜单,并解决重定向问题，重新定位到当前路由下的第一个可选子目录
 * 注意：1、如果子菜单均不可见也需要隐藏该菜单,这里采用了递归处理;
 *       2、如果没有子菜单则判断主菜单是否显示即可
 * @param {object} opts 路由配置
 */
export default function canShowMenu(opts) {
    if (!opts || !opts.meta)
        return false;

    if (!opts.meta.show) {
        return false;
    } else if (opts.children) {
        return opts.children.filter((i) => canShowMenu(i)).length > 0;
    } else {
        return true;
    }
}

