/**
 * Description:评论的相关store
 *
 * Author: zoe
 * Time: 2018/5/22 0022
 */

import { observable,action,useStrict } from 'mobx';
import Constants from "../config/Constants";

class CommentStore{
    //评论数量
    @observable
    commentCount=0;

    //评论内容
    @observable
    placeholder ="添加评论...";

    //评论的type_id
    @observable
    id=0;

    //评论的type
    @observable
    type='';

    //父评论的id
    @observable
    parent_id=0;

    //评论框状态
    @observable
    state=Constants.EMPTY;

    /**
     * 设置评论的类型
     * @param newType
     */
    @action
    setType(newType){
        this.type=newType;
    }

    /**
     * 设置父评论id
     * @param newParentId
     */
    @action
    setParentId(newParentId){
        this.parent_id=newParentId;
    }

    /**
     * 设置评论的id
     * @param newId
     */
    @action
    setId(newId){
        this.id=newId;
    }

    /**
     * 设置评论框占位
     * @param newPlaceHoder
     */
    @action
    setPlaceHoder(newPlaceHoder){
        this.placeholder=newPlaceHoder;
    }

    /**
     * 设置评论框状态
     * @param newState
     */
    @action
    setState(newState){
        this.state=newState;
    }
}

export default new CommentStore();