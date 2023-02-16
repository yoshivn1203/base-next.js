import { useMemo, useState } from 'react';
import React from 'react';
import { Collapse, Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const { Panel } = Collapse;

const MIN_RADIO_SHOW = 5;

const shortRadioOption = (data: any) => data.slice(0, MIN_RADIO_SHOW);

const categoryListTag = [
  {
    name: 'New colections',
    tag: [
      { name: '1', nameSlug: '1' },
      { name: '2', nameSlug: '2' },
      { name: '3', nameSlug: '3' },
      { name: '4', nameSlug: '4' },
      { name: '5', nameSlug: '5' },
      { name: '6', nameSlug: '6' },
    ],
  },
  {
    name: 'Category',
    tag: [
      { name: '4', nameSlug: '4' },
      { name: '5', nameSlug: '5' },
    ],
  },
];

function Filter({ filter, onchangeFilter }: any) {
  const filterGroup = useMemo(() => {
    return categoryListTag?.reduce((ac: any, item: any) => {
      return { ...ac, [item?.name]: false };
    }, {});
  }, [categoryListTag]);

  const [showMore, setShowmore] = useState(filterGroup);

  // console.log('filterGroup', filter);
  // console.log('categoryListTag', filter);
  // console.log('filter', filter);

  return (
    <Collapse
      defaultActiveKey={['0', '1', '2', '3']}
      ghost
      expandIconPosition="end"
    >
      {categoryListTag?.map((item, index) => (
        <Panel header={item?.name} key={index}>
          <Checkbox.Group
            options={
              showMore?.[item?.name]
                ? item?.tag?.map((tagItem) => {
                    return {
                      label: tagItem?.name,
                      value: tagItem?.nameSlug,
                    };
                  })
                : shortRadioOption(
                    item?.tag?.map((tagItem) => {
                      return {
                        label: tagItem?.name,
                        value: tagItem?.nameSlug,
                      };
                    }),
                  )
            }
            value={filter?.[item?.name]}
            onChange={(checkValues) => {
              onchangeFilter({ [item?.name]: checkValues });
            }}
          />
          {item?.tag?.length >= MIN_RADIO_SHOW && (
            <p
              className="category__wrapper__filter__more"
              onClick={() =>
                setShowmore({
                  ...showMore,
                  [item?.name]: !showMore?.[item?.name],
                })
              }
            >
              {showMore?.[item?.name] ? 'Less options' : 'More options'}
            </p>
          )}
        </Panel>
      ))}
    </Collapse>
  );
}

export default Filter;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
