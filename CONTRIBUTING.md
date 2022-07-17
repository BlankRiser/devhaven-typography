## Scoping my package

All of my packages are scopes with `devhaven` so that there are no conflicts with other packages.

```
npm init --scope=devhaven
```

## Testing my packahe

We have to link the package locally using `npm link`, and then we can go to a project where we want to test the package and then link it back.

```shell
# within our package
sudo npm link

# project where package will be tested
npm link


```

## Publish

```shell
# npm assumes a scopes package would be private, which is a paid feature
npm publish --access=public
```
