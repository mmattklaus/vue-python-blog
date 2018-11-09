<template>
    <div id="composer">
        <div class="">
            <!-- START ARTICLE FEED -->
            <section class="columns">
                <div class="column is-8 is-offset-2">
                    <div class="tabs is-centered">
                        <ul>
                            <li class="is-active">
                                <a>
                                    <span class="icon is-small"><i class="fas fa-pen" aria-hidden="true"></i></span>
                                    <span>Composer</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon is-small"><i class="fas fa-book" aria-hidden="true"></i></span>
                                    <span>Draft</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon is-small">
                                        <i class="far fa-file" aria-hidden="true"></i></span>
                                    <span>Articles</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon is-small"><i class="far fa-lightbulb"
                                                                   aria-hidden="true"></i></span>
                                    <span>Published</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="editor__parent">
                        <editor class="editor" :extensions="extensions">

                            <div class="menubar" slot="menubar" slot-scope="{ nodes, marks }">
                                <div v-if="nodes && marks">

                                    <button class="menubar__button"
                                            :class="{ 'is-active': marks.bold.active() }"
                                            @click="marks.bold.command">
                                        <icon name="bold"/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': marks.italic.active() }"
                                            @click="marks.italic.command">
                                        <icon name="italic"/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.paragraph.active({ textAlign: 'left' }) }"
                                            @click="nodes.paragraph.command({ textAlign: 'left' })">
                                        <icon name="align-left"/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.paragraph.active({ textAlign: 'center' }) }"
                                            @click="nodes.paragraph.command({ textAlign: 'center' })">
                                        <icon name="align-center"/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.paragraph.active({ textAlign: 'right' }) }"
                                            @click="nodes.paragraph.command({ textAlign: 'right' })">
                                        <icon name="align-right"/>
                                    </button>
                                    <button class="menubar__button"
                                            :class="{ 'is-active': marks.strike.active() }"
                                            @click="marks.strike.command">
                                        <icon name="strikethrough"/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': marks.underline.active() }"
                                            @click="marks.underline.command">
                                        <icon name="underline"/>
                                    </button>

                                    <button class="menubar__button"
                                            @click="marks.code.command"
                                            :class="{ 'is-active': marks.code.active() }">
                                        <icon name="code"/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.paragraph.active() }"
                                            @click="nodes.paragraph.command">
                                        <icon name="paragraph"/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.heading.active({ level: 1 }) }"
                                            @click="nodes.heading.command({ level: 1 })">
                                        <heading1/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.heading.active({ level: 2 }) }"
                                            @click="nodes.heading.command({ level: 2 })">
                                        <heading2/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.heading.active({ level: 3 }) }"
                                            @click="nodes.heading.command({ level: 3 })">
                                        <heading3/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.bullet_list.active() }"
                                            @click="nodes.bullet_list.command">
                                        <list-bullets/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.ordered_list.active() }"
                                            @click="nodes.ordered_list.command">
                                        <list-numbers/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.blockquote.active() }"
                                            @click="nodes.blockquote.command">
                                        <format-quote-open-icon/>
                                    </button>

                                    <button class="menubar__button"
                                            :class="{ 'is-active': nodes.code_block.active() }"
                                            @click="nodes.code_block.command">
                                        <icon name="code"/>
                                    </button>
                                    <button class="menubar__button link"
                                            @click="addLink(marks.link)"
                                            :class="{ 'is-active': marks.link.active() }">
                                        <icon name="link"/>
                                    </button>

                                    <button class="menubar__button embed" disabled
                                            @click="addLink(marks.link)"
                                            :class="{ 'is-active': marks.link.active() }">
                                        <youtube-icon/>
                                    </button>

                                    <button class="menubar__button" disabled
                                            :class="{ 'is-active': nodes.todo_list.active() }"
                                            @click="nodes.todo_list.command">
                                        <format-list-checkbox-icon/>
                                    </button>

                                    <button class="menubar__button" @click.prevent="addImage(nodes, marks)">
                                        <icon name="image"/>
                                    </button>
                                    <input type="file" class="editor__image-btn" style="display: none;">
                                </div>
                            </div>

                            <div class="editor__content" slot="content" slot-scope="props">
                                <h2>
                                    Hi there,
                                </h2>
                                <pre><code v-html="CSSExample"></code></pre>
                                <p>
                                    Note: tiptap doesn't import syntax highlighting language definitions from
                                    highlight.js. You
                                    <strong>must</strong> import them and initialize the extension with all languages
                                    you want to support:
                                </p>
                                <p>
                                    this is a very <em>basic</em> example of tiptap.
                                </p>
                                <pre><code>body { display: none; }</code></pre>
                                <pre><code v-html="CSSExample"></code></pre>
                                <ul>
                                    <li>
                                        A regular list
                                    </li>
                                    <li>
                                        With regular items
                                    </li>
                                </ul>
                                <blockquote>
                                    It's amazing 👏
                                    <br/>
                                    – mom
                                </blockquote>
                            </div>

                        </editor>
                    </div>
                </div>
            </section>
            <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <button class="button is-primary">
                                    <span class="icon is-small">
                                      <i class="fas fa-save"></i>
                                    </span>
                                    <strong>Save Changes</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import heading1 from 'vue-material-design-icons/FormatHeader1'
    import heading2 from 'vue-material-design-icons/FormatHeader2'
    import heading3 from 'vue-material-design-icons/FormatHeader3'
    import listBullets from 'vue-material-design-icons/FormatListBulleted'
    import listNumbers from 'vue-material-design-icons/FormatListNumbers'
    import checkList from 'vue-material-design-icons/FormatListChecks'
    import Icon from './../components/Icon.vue'
    import {Editor} from 'tiptap'
    import {
        CodeBlockHighlightNode,
        BlockquoteNode,
        CodeBlockNode,
        HardBreakNode,
        HeadingNode,
        OrderedListNode,
        BulletListNode,
        ListItemNode,
        TodoItemNode,
        TodoListNode,
        BoldMark,
        CodeMark,
        ItalicMark,
        LinkMark,
        StrikeMark,
        UnderlineMark,
        HistoryExtension,
        ImageNode,
        PlaceholderExtension,
    } from 'tiptap-extensions'
    import ParagraphAlignmentNode from './../modules/editor/Paragraph.js'
    import FormatQuoteOpenIcon from "vue-material-design-icons/FormatQuoteOpen";
    import FormatListCheckboxIcon from "vue-material-design-icons/FormatListCheckbox";
    import {
        CSSExample
    } from './../test'
    import YoutubeIcon from "vue-material-design-icons/Youtube";
    export default {
        name: "Composer",
        components: {
            YoutubeIcon,
            FormatListCheckboxIcon,
            FormatQuoteOpenIcon,
            Editor,
            heading1, heading2, heading3, listBullets, listNumbers, checkList,
            "icon": Icon
        },
        data() {
            return {
                CSSExample,
                extensions: [
                    new BlockquoteNode(),
                    new BulletListNode(),
                    new CodeBlockNode(),
                    new HardBreakNode(),
                    new HeadingNode({maxLevel: 3}),
                    new ListItemNode(),
                    new OrderedListNode(),
                    new TodoItemNode(),
                    new TodoListNode(),
                    new BoldMark(),
                    new CodeMark(),
                    new ItalicMark(),
                    new LinkMark(),
                    new StrikeMark(),
                    new UnderlineMark(),
                    new HistoryExtension(),
                    new ImageNode(),
                    new ParagraphAlignmentNode(),
                    new PlaceholderExtension({
                        emptyNodeClass: 'is-empty',
                    }),
                    new CodeBlockHighlightNode({
                        languages: {
                            js: require("highlight.js/lib/languages/javascript"),
                            css: require('highlight.js/lib/languages/css'),
                            go: require('highlight.js/lib/languages/go'),
                            cpp: require('highlight.js/lib/languages/cpp'),
                            python: require('highlight.js/lib/languages/python'),
                            arduino: require('highlight.js/lib/languages/arduino'),
                            erlang: require('highlight.js/lib/languages/erlang'),
                            php: require('highlight.js/lib/languages/php'),
                            dart: require('highlight.js/lib/languages/dart'),
                            haskell: require('highlight.js/lib/languages/haskell'),
                        },
                    }),
                ],
            }
        },
        methods: {
            setLinkUrl(url, type) {
                type.command({href: url});
            },
            adjustEditorMenu() {
                let navHeight = $('nav.navbar').height();
                let header = $(".menubar:first");
                let editorWidth = $('.editor.vue-editor').width();
                console.log(window.pageYOffset, navHeight);
                if (window.pageYOffset >= navHeight) {
                    $(header).addClass("sticky").css({width: editorWidth, top: navHeight});
                } else {
                    $(header).removeClass("sticky");
                }
            },
            addImage(nodes, marks) {
                $('.editor__image-btn')
                    .on('change', (evt) => {
                        let file = evt.target.files;
                        if (file && file[0]) {
                            file = file[0];
                            let reader = new FileReader();
                            reader.onload = () => {
                                nodes.image.command({src: reader.result});
                            };
                            reader.readAsDataURL(file);
                        }

                    })
                    .click();
            },
            addLink(type, focus) {
                this.$prompt('', 'Add Link', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    inputPattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                    inputErrorMessage: 'Invalid Link',
                    inputPlaceholder: 'https://...'
                }).then(({value}) => {
                    this.setLinkUrl(value, type, focus)
                }).catch(() => {
                });
            },
            mounted() {
                console.log("Hello,World!");
                let vm = this;
                window.onscroll = function () {
                    vm.adjustEditorMenu();
                };

            }
        }
    }
</script>

<style>
    #composer {
        padding-top: 100px !important;
        padding-bottom: 60px;
    }

    .navbar {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .06);
        padding-left: 120px;
        padding-right: 200px;
        /*padding-top: 52px;*/
    }

    .columns:last-child {
        margin-bottom: 0 !important;
    }

    .menubar__button.link {
    }

    .sticky {
        position: fixed;
        width: 100%;
        top: 80px;
    }

    .sticky.menubar > div:first-child {
        background-color: #bcff80;
        width: 100%;
    }

    .sticky + .editor__content {
        padding-top: 102px;
    }

    .ProseMirror:focus {
    }
    .ProseMirror {
        outline: none;
        border: 2px solid #FFF9C4;;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        padding: 12px;
        margin-top: 22px;
        min-height: 300px!important;
    }

    .ProseMirror-focused, .editor__content:focus {
        -webkit-box-shadow: none!important;
        -moz-box-shadow: none!important;
        box-shadow: none!important;
    }

    .is-empty {
        content: 'Hello, World';
    }

    pre {
        background: #000 !important;
        border-radius: 5px !important;
        color: #fff !important;
        font-size: .8rem;
        overflow-x: auto;
        padding: .7rem 1rem;
    }

    .editor {
        color: #000;
        font-family: -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif;
        font-size: 18px;
        line-height: 1.5;
    }

    .editor__content {
        white-space: pre-wrap;
    }

    .editor__content:focus, .editor__content:active {
        outline: none !important;
    }

    .material-design-icon {
        font-size: 15px;
        width: 18px;
    }

    .menubar__button.is-active {
        background-color: rgba(0, 0, 0, .1);
    }

    .menubar__button:hover {
        background-color: rgba(0, 0, 0, .05);
    }

    .menubar__button {
        background: rgba(0, 0, 0, 0);
        border: 0;
        border-radius: 3px;
        color: #000;
        cursor: pointer;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        font-weight: 700;
        margin-right: .2rem;
        padding: .2rem .5rem;
    }

    .menubar {
        -webkit-transition: visibility .2s .4s, opacity .2s .4s;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 1rem;
        transition: visibility .2s .4s, opacity .2s .4s;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        text-size-adjust: 100%;
    }
</style>