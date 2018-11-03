<template>
    <div id="composer">
        <div id="mail-app" class="columns">
            <aside class="column is-2 aside hero is-fullheight">
                <div>
                    <div class="compose has-text-centered"><a class="button is-danger is-block is-bold"><span
                            class="compose">Compose</span></a></div>
                    <div class="main">
                        <a href="#" class="item active"><span class="icon"><i
                            class="fa fa-inbox"></i></span><span class="name">Inbox</span></a>
                        <a href="#" class="item"><span
                            class="icon"><i class="fa fa-star"></i></span><span class="name">Starred</span></a>
                        <a href="#" class="item"><span class="icon"><i class="fa fa-envelope-o"></i></span><span
                            class="name">Sent Mail</span></a>
                    </div>
                </div>
            </aside>
            <div id="message-feed" class="column is-4 messages hero is-fullheight">
                <div id="inbox-messages" class="inbox-messages">
                    <div id="msg-card-0" data-preview-id="0" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Bulah Bauch</small></span> <span
                                    class="msg-timestamp"></span> <span class="msg-attachment"><i
                                    class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Sapiente dolore ut beatae tempora necess</strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Distinctio et sed aut at ab illo recusandae
                                doloremque.
                                Eveniet nesciunt quibusdam cum velit ea ad.</p></div>
                        </div>
                    </div>
                    <div id="msg-card-1" data-preview-id="1" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Kaci Heller</small></span> <span
                                    class="msg-timestamp"></span> <span class="msg-attachment"><i
                                    class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Enim incidunt ea ut magnam officiis quo </strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Officia non voluptas sed aut nobis.</p>
                            </div>
                        </div>
                    </div>
                    <div id="msg-card-2" data-preview-id="2" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Armand Mertz</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Voluptas nostrum excepturi quasi alias.</strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Animi repudiandae enim tempore aperiam vero.
                                Ut inventore explicabo sit quibusdam.
                                Alias et animi praesentium modi et est.
                                Quae dolore et.</p></div>
                        </div>
                    </div>
                    <div id="msg-card-3" data-preview-id="3" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Colin Cummings</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Officia pariatur et.</strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Corporis nemo numquam incidunt autem est.
                                Est ullam error aut dolorem.
                                Rerum omnis tenetur quia ut.</p></div>
                        </div>
                    </div>
                    <div id="msg-card-4" data-preview-id="4" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Bradford Dach</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Nisi id et ducimus enim esse nulla debit</strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Suscipit dolores est sed enim occaecati
                                similique fuga et minus.
                                Fugiat veritatis distinctio cum quibusdam dolor aut totam.
                                Qui enim optio necessitatibus eaque similique nihil.</p></div>
                        </div>
                    </div>
                    <div id="msg-card-5" data-preview-id="5" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Ramona Lehner</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Distinctio possimus enim dolore est dolo</strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Fuga magni veritatis ut cum animi quasi
                                voluptas quas.
                                Aut et necessitatibus consequatur dolorem earum.
                                Blanditiis ipsum quo ratione voluptatem aut dolorem.
                                Placeat nulla non doloremque a culpa ullam ipsa ab.</p></div>
                        </div>
                    </div>
                    <div id="msg-card-6" data-preview-id="6" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Alvera Morissette</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Quidem fuga mollitia totam reprehenderit</strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Qui animi odio voluptatum dolorum et et
                                totam optio et.
                                Deserunt et voluptates accusamus sed aut officia rerum est.
                                Nihil ea magnam iure autem.</p></div>
                        </div>
                    </div>
                    <div id="msg-card-7" data-preview-id="7" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Dr. Korey Koch</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Doloribus possimus reiciendis velit quas</strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Aperiam enim maxime asperiores tempora
                                cumque dolore.</p></div>
                        </div>
                    </div>
                    <div id="msg-card-8" data-preview-id="8" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Deondre Goyette</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Asperiores sed totam beatae quo dolorem </strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Culpa modi fugiat pariatur dolor corrupti
                                cum veritatis totam velit.
                                Voluptates aut laudantium sint quae et fuga eum.</p></div>
                        </div>
                    </div>
                    <div id="msg-card-9" data-preview-id="9" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Velda Hettinger</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Dignissimos a atque.</strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Aliquid non sint quo.
                                Exercitationem voluptas sint sequi.
                                Accusamus modi fugit omnis molestiae odit magni minima vel.
                                Quia cum sit quas molestias sed.
                                Voluptatem consequatur accusamus error ex.</p></div>
                        </div>
                    </div>
                    <div id="msg-card-10" data-preview-id="10" class="card">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Brendon Weber</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fa fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong id="fake-subject-1">Itaque dolore iure.</strong></span>
                            </div>
                            <div class="msg-snippet"><p id="fake-snippet-1">Delectus rem omnis sint et eaque.
                                Non recusandae vitae voluptate quia laudantium.</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="message-pane" class="column is-6 message hero is-fullheight is-hidden">
                <div class="action-buttons">
                    <div class="control is-grouped"><a class="button is-small"><i class="fa fa-inbox"></i></a> <a
                            class="button is-small"><i class="fa fa-exclamation-circle"></i></a> <a
                            class="button is-small"><i class="fa fa-trash-o"></i></a></div>
                    <div class="control is-grouped"><a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
                        <a class="button is-small"><i class="fa fa-trash-o"></i></a></div>
                    <div class="control is-grouped"><a class="button is-small"><i class="fa fa-folder"></i></a> <a
                            class="button is-small"><i class="fa fa-tag"></i></a></div>
                </div>
                <div class="box message-preview">
                    <div class="top">
                        <div class="avatar"><img src="https://placehold.it/128x128"></div>
                        <div class="address">
                            <div class="name">John Smith</div>
                            <div class="email">someone@gmail.com</div>
                        </div>
                        <hr>
                        <div class="content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Composer",

    }
</script>

<style scoped>
    #composer {
        padding-top: 50px;
    }
    .aside {
        display:block;
        background-color: #F9F9F9;
        border-right: 1px solid #DEDEDE;
    }
    .messages {
        display:block;
        background-color: #fff;
        border-right: 1px solid #DEDEDE;
    }
    .message {
        display:block;
        background-color: #fff;
    }
    .aside .compose {
        height: 95px;
        margin:0 -10px;
        padding: 25px 30px;
    }
    .aside .compose .button {
        color: #F6F7F7;
    }
    .aside .compose .button .compose {
        font-size: 14px;
        font-weight: 700;
    }
    .aside .main {
        padding: 40px;
        color: #6F7B7E;
    }
    .aside .title {
        color: #6F7B7E;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
    }
    .aside .main .item {
        display: block;
        padding: 10px 0;
        color: #6F7B7E;
    }
    .aside .main .item.active {
        background-color: #F1F1F1;
        margin: 0 -50px;
        padding-left: 50px;
    }
    .aside .main .item:active,.aside .main .item:hover {
        background-color: #F2F2F2;
        margin: 0 -50px;
        padding-left: 50px;
    }
    .aside .main .icon {
        font-size: 19px;
        padding-right: 30px;
        color: #A0A0A0;
    }
    .aside .main .name {
        font-size: 15px;
        color: #5D5D5D;
        font-weight: 500;
    }
    .messages {
        padding: 40px 20px;
    }
    .message {
        padding: 40px 20px;
    }
    .messages .action-buttons {
        padding: 0;
        margin-top: -20px;
    }
    .message .action-buttons {
        padding: 0;
        margin-top: -5px;
    }
    .action-buttons .control.is-grouped {
        display: inline-block;
        margin-right: 30px;
    }
    .action-buttons .control.is-grouped:last-child {
        margin-right: 0;
    }
    .action-buttons .control.is-grouped .button:first-child {
        border-radius: 5px 0 0 5px;
    }
    .action-buttons .control.is-grouped .button:last-child {
        border-radius: 0 5px 5px 0;
    }
    .action-buttons .control.is-grouped .button {
        margin-right: -5px;
        border-radius: 0;
    }
    .pg {
        display: inline-block;
        top:10px;
    }
    .action-buttons .pg .title {
        display: block;
        margin-top: 0;
        padding-top: 0;
        margin-bottom: 3px;
        font-size:12px;
        color: #AAAAA;
    }
    .action-buttons .pg a{
        font-size:12px;
        color: #AAAAAA;
        text-decoration: none;
    }
    .is-grouped .button {
        background-image: linear-gradient(#F8F8F8, #F1F1F1);
    }
    .is-grouped .button .fa {
        font-size: 15px;
        color: #AAAAAA;
    }
    .inbox-messages {
        margin-top:60px;
    }
    .message-preview {
        margin-top: 60px;
    }
    .inbox-messages .card {
        width: 100%;
    }
    .inbox-messages strong {
        color: #5D5D5D;
    }
    .inbox-messages .msg-check {
        padding: 0 20px;
    }
    .inbox-messages .msg-subject {
        padding: 10px 0;
        color: #5D5D5D;
    }
    .inbox-messages .msg-attachment {
        float:right;
    }
    .inbox-messages .msg-snippet {
        padding: 5px 20px 0px 5px;
    }
    .inbox-messages .msg-subject .fa {
        font-size: 14px;
        padding:3px 0;
    }
    .inbox-messages .msg-timestamp {
        float: right;
        padding: 0 20px;
        color: #5D5D5D;
    }
    .message-preview .avatar {
        display: inline-block;
    }
    .message-preview .top .address {
        display: inline-block;
        padding: 0 20px;
    }
    .avatar img {
        width: 40px;
        border-radius: 50px;
        border: 2px solid #999;
        padding: 2px;
    }
    .address .name {
        font-size: 16px;
        font-weight: bold;
    }
    .address .email {
        font-weight: bold;
        color: #B6C7D1;
    }
    .card.active {
        background-color:#F5F5F5;
    }
</style>