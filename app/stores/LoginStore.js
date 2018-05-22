/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/22 0022
 */
import { observable, action } from 'mobx';

class LoginStore {
    //账号
    @observable
    account = '';

    //密码
    @observable
    password = '';

    //token
    @observable
    token = '';

    @action
    setAccount(newAccount) {
        this.account = newAccount;
    }

    @action
    setPassword(newPassword) {
        this.password = newPassword;
    }

    @action
    setToken(newToken) {
        this.token = newToken;
    }
}

export default new LoginStore();