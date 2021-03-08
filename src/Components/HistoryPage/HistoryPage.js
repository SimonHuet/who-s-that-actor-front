import { Table, Tag, Space } from 'antd'

import './HistoryPage.css'

const { Column } = Table

const data = [
  {
    id: '008c77ca-9ea0-4d29-93bf-11a203f8aef1',
    first_name: 'speaker_86',
    last_name: 'speaker_86_5789',
    url_imdb: 'tes',
    code_ia: 5789,
  },
  {
    id: '008c77ca-9ea0-4d29-93bf-11a203f8aef1',
    first_name: 'speaker_86',
    last_name: 'speaker_86_5789',
    url_imdb: 'tes',
    code_ia: 5789,
  },
]

// var predict = predicts.reduce(function ())

export const HistoryPage = () => {
  return (
    <Table dataSource={data}>
      <Column title="First Name" dataIndex="first_name" key="first_name" />
      <Column title="Last Name" dataIndex="last_name" key="last_name" />
      <Column title="Link" dataIndex="url_imdb" key="url_imdb" />
      <Column title="Code ia" dataIndex="code_ia" key="code_ia" />
    </Table>
  )
}
