/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

import { ipAddress } from '@constants/env'

if (__DEV__) {
  const tron = Reactotron.configure({ host: ipAddress })
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect()

  tron.clear?.()

  console.tron = tron
}
