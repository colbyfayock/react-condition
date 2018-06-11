# React Condition
[Inline conditionals](https://reactjs.org/docs/conditional-rendering.html) are so 2017. Stop creating a new component every time you need an `if`-based render and wrap it with an `<If></If>`!

## Example
```
<If condition={true}>
  Render me!
</If>
<If condition={false}>
  Don't render me!
</If>
```