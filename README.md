# doctorsforyou.github.io


## Important files and directories

`README.md` - this help file
`site` - for Jekyll
`Gemfile` - for Ruby Gems


## development

`bundle exec jekyll serve -s site`

## Bootstrap integration

- installing bootstrap as a submodule
```
cd <root of this project>
mkdir _sass
cd _sass
git submodule add https://github.com/twbs/bootstrap.git
```

Now check out desired release tag (say 4.2.0)

```
git checkout v4.2.0
```

- Updating Bootstrap version (from 4.2.0 to 4.5.3)

```
cd <project_root>/_sass/bootstrap
git fetch --tags
git checkout v4.5.3
```


## Dev steps

- Set up github actions, github Pages
- Add default layout
- autoprefixer is not supported on github. finding Workaround [todo]
- add bootstrap
- image assets
