<template>
    <div id="compose">
        <ckeditor :editor="editor.editor" v-model="editor.editorData"></ckeditor>

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
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
    export default {
        name: "Compose",
        components: {
        },
        data () {
            return {
                editor: {
                    editor: ClassicEditor,
                    editorData: '<p>Content of the editor.</p>'
                }
            }
        },
        mounted () {
            console.log('Editor mounted...')
        }
    }
</script>

<style scoped>
    #compose {
    }

    .navbar {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .06);
        padding-left: 300px;
        padding-right: 300px;
        /*padding-top: 52px;*/
    }

</style>