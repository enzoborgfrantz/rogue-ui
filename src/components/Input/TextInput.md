TextInput example:

```js
initialState = {
  value: '',
};

<TextInput
  type="text"
  placeholder="text"
  value={state.value}
  setValue={value => {
    setState({ value });
  }}
/>;
```

TextInput with error example:

```js
initialState = {
  value: '',
  error: 'something is wrong',
};

<TextInput
  type="text"
  placeholder="text"
  value={state.value}
  error={state.error}
  setValue={value => {
    setState({ value });
  }}
/>;
```
