import get from 'lodash/get'

const data = {
  hello: 'world',
}

export default () => get(data, 'hello')
