<!-- | Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 | -->

<!-- [[toc]] -->
<!-- 
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
::: -->

<!-- ```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
``` -->
<!-- ```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
``` -->

<!-- ::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

::: -->

<script setup>
import CustomComponent from './components/CustomComponent.vue'

</script>

# 开发工具导航
<!-- :tada: :100: -->
## 官方文档
<CustomComponent :navList='[1,2,3]'/>
