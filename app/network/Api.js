/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/4/27 0027
 */

    //服务器地址
const host = 'http://app3.qdaily.com/app3/';

export default {

    //首页
    news : host + 'homes/index/0.json?',

    //lab页
    papers : host + 'papers/index/0.json',

    //新闻详情页
    newsDetail : host + 'articles/detail/{id}.json',

    /**
     * 点赞
     * POST请求
     *
     * genre
     * id
     * praise_type
     */
    createPraise : host + 'praises/create_praise',

    /**
     * 评论
     * POST请求
     *
     * comment_type
     * content
     * id
     * parent_id
     */
    createComment : host + 'comments/create_comment',

    /**
     * 获取评论列表
     *
     * id:文章id
     */
    getCommentList : host + 'comments/index/article/{id}/0.json'
}

