import { notification } from 'antd';

import axiosInstance from '../base/axiosInstance';
import { requestOptions } from '@/model/requestOptions';

const getRequest = (url: string, options?: requestOptions): Promise<object> => {
  return axiosInstance
    .get(url, options)
    .then((res) => {
      notification.success({
        message: 'Notification Title',
        description: 'This is the content of the notification. ',
      });
      return res?.data;
    })
    .catch((err) => {
      notification.error({
        message: 'Notification Title',
        description: 'This is the content of the notification. ',
      });
      return err;
    });
};

export { getRequest };
