import { foo } from './foo'  //  jest 理解不了 ESModel 环境
import Foo from "../src/components/Foo.vue"
import { mount } from '@vue/test-utils'
test('1+1=2', () => {
  console.log(mount(Foo))
  console.log(foo)  // 安装完转换和 配置 babel 后可以输出
  expect(1 + 1).toBe(2);
})
