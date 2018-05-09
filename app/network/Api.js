/**
 * Description:Api
 *
 * Author: zoe
 * Time: 2018/4/27 0027
 */

//服务器地址
const host = 'http://app3.qdaily.com/app3/';

export default {

    /**
     * 首页
     * GET请求
     */
    news : host + 'homes/index/0.json?',

    /**
     * Label页
     * GET 请求
     */
    papers : host + 'papers/index/0.json',

    /**
     * 新闻详情页
     * GET 请求
     */
    newsDetail : host + 'articles/detail/{id}.json',

    /**
     * 点赞
     * POST请求
     *
     * genre 点赞：1，取消点赞：2
     * id
     * praise_type :评论：comment，新闻：article
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
     * 获取新闻评论列表
     * GET请求
     *
     * id:文章id
     */
    getCommentList : host + 'comments/index/article/{id}/0.json'
}

