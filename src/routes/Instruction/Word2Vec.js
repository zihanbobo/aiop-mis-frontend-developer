import React from 'react';
import { connect } from 'dva';
import { Icon, Form, Input, Button, Row, Col } from 'antd';
import RequestBasicTable from './../../components/InstructionTable/RequestBasicTable';
import RequestBodyTable from './../../components/InstructionTable/RequestBodyTable';
import ResponseBodyTable from './../../components/InstructionTable/ResponseBodyTable';
import CodeBlock from './../../components/CodeBlock';

// 请求头部、方法
const requestBasicData = [{
  param: 'URL',
  value: 'http://aiop.bupt.com/restapi/nlp/v1/word_2_vec',
}, {
  param: 'Method',
  value: 'POST',
}, {
  param: 'Content-Type',
  value: 'application/json',
}, {
  param: 'access_token',
  value: <span>通过API Key和Secret Key获取的access_token，参考<a href="/instruction/access-token">令牌获取</a></span>,
}];

// 请求参数实体
const requestBodyData = [{
  param: 'text',
  type: 'string',
  mandatory: <Icon type="check" />,
  description: '待生成词向量的短文本（GBK编码的URL编码形式）',
}];

// 请求示例代码
const requestCodeData = `{
    "text": "坚持"
}`;

// 返回参数实体
const responseBodyData = [{
  param: 'vector',
  type: 'array',
  description: '词向量数组（300维）',
}, {
  param: 'word',
  type: 'string',
  description: '原始短文本',
}];

// 返回示例代码
const responseCodeData = `{
    "vector": [
        0.0011158538,
        0.07489821,
        -0.042005245,
        0.004925106,
        0.054964945,
        -0.015621752,
        -0.046613116,
        0.018944804,
        0.031145059,
        -0.0258993,
        0.05749038,
        -0.01590604,
        0.0920489,
        -0.06589444,
        0.000257446,
        -0.027463384,
        0.11842636,
        0.0025640125,
        -0.07078559,
        -0.09228496,
        -0.042804867,
        0.10538731,
        0.06575682,
        -0.0070698196,
        0.08667757,
        -0.056324095,
        0.11106301,
        0.02069774,
        0.04220113,
        0.028428756,
        0.07079363,
        -0.053413913,
        -0.04333025,
        -0.022116166,
        -0.08406373,
        0.10520649,
        0.063958675,
        -0.056992125,
        0.014131,
        0.13322338,
        0.08021028,
        0.0871256,
        0.07978033,
        -0.0733271,
        -0.012431302,
        -0.041286994,
        -0.052329,
        -0.025297577,
        0.0059160944,
        -0.10289602,
        0.105156265,
        -0.036871996,
        -0.032273166,
        -0.04900595,
        0.0014018491,
        -0.09056919,
        -0.10891328,
        -0.110058464,
        -0.22677708,
        0.049252063,
        0.036513373,
        0.0017149672,
        0.074154854,
        0.10700463,
        0.021211067,
        0.06978707,
        -0.06924361,
        -0.064260036,
        -0.045643725,
        -0.029685447,
        0.09939919,
        -0.042689342,
        0.103257656,
        -0.037738923,
        -0.06292901,
        0.03460272,
        0.0033167214,
        -0.069363154,
        0.007894856,
        -0.09148233,
        -0.019728351,
        0.02504041,
        0.06497528,
        -0.03422099,
        -0.050743822,
        -0.07857286,
        0.0036650996,
        0.056364276,
        0.0046686446,
        -0.059037387,
        -0.07307395,
        0.053958382,
        -0.018476682,
        -0.0035884522,
        -0.07227735,
        0.085194856,
        0.049538363,
        0.040826906,
        0.002082733,
        0.008550927,
        0.049801555,
        0.07710522,
        -0.045706008,
        0.045971207,
        -0.071349144,
        0.05496896,
        0.013754295,
        -0.051235046,
        -0.071203485,
        -0.0068564536,
        0.016942736,
        -0.03776102,
        -0.015693076,
        0.039526016,
        0.02448188,
        0.012713581,
        -0.043850604,
        -0.009139293,
        -0.047630724,
        -0.078233324,
        -0.050667476,
        0.071142204,
        0.031384144,
        -0.011054065,
        -0.08249261,
        -0.06343028,
        0.03598799,
        0.040099613,
        -0.075319126,
        0.049980365,
        0.06818582,
        -0.01966205,
        -0.08760477,
        0.09487972,
        -0.088176355,
        0.059031356,
        -0.022224657,
        -0.025488438,
        -0.06841184,
        -0.021307504,
        0.0096015865,
        0.07730813,
        0.08394319,
        -0.096905895,
        -0.061416157,
        0.04129101,
        -0.10222298,
        -0.010502567,
        -0.05624976,
        -0.035243623,
        0.050352048,
        0.07726394,
        -0.010700463,
        0.04170589,
        0.04632983,
        -0.08476692,
        0.028368484,
        -0.03912922,
        -0.013953195,
        0.07240392,
        0.037520934,
        0.025299584,
        0.020570165,
        0.012746731,
        -0.018302895,
        0.026330251,
        -0.022986105,
        0.08013393,
        0.018411387,
        0.04830578,
        0.035130106,
        0.04516857,
        0.12535776,
        -0.005410605,
        -0.0035931738,
        -0.043776266,
        0.06333384,
        0.08256093,
        -0.0316403,
        -0.03774495,
        -0.06575481,
        -0.03413661,
        0.028385561,
        0.012697508,
        -0.018143171,
        0.04026436,
        -0.0043714987,
        -0.01026047,
        -0.03695236,
        0.067617245,
        -0.01647361,
        -0.0226978,
        -0.0006097817,
        -0.047176667,
        -0.03278348,
        -0.02870601,
        -0.0320813,
        -0.05849995,
        0.011409676,
        0.01619535,
        -0.008860831,
        -0.030241968,
        0.010524667,
        -0.058311097,
        -0.019905152,
        -0.03341534,
        0.024596399,
        -0.06429118,
        -0.007785662,
        0.016411329,
        -0.07368372,
        0.02055811,
        -0.048979834,
        0.035771012,
        -0.10334807,
        -0.0047503146,
        0.048356008,
        -0.03155893,
        0.06004997,
        0.078397065,
        -0.031249532,
        0.052739862,
        0.06207012,
        -0.020939838,
        -0.08941396,
        0.06362818,
        -0.042963587,
        -0.018563073,
        -0.060849592,
        0.014114927,
        -0.07281077,
        -0.04741274,
        0.03426519,
        -0.04318358,
        -0.03370867,
        0.07339742,
        0.0442253,
        -0.06752182,
        0.0036052284,
        -0.02617555,
        0.0686891,
        -0.03505376,
        0.06526057,
        -0.017764457,
        -0.025594922,
        0.001219021,
        -0.06184811,
        -0.011538258,
        -0.025841035,
        0.042849068,
        -0.05372131,
        -0.04260898,
        -0.0579153,
        0.042945504,
        -0.036405887,
        -0.00039017713,
        0.056418523,
        0.04464118,
        -0.13168642,
        0.014662407,
        0.0037650522,
        -0.022696797,
        -0.041587353,
        -0.0053570624,
        -0.035891555,
        -0.0003806942,
        -0.06756099,
        -0.09588929,
        -0.15208882,
        -0.052047726,
        -0.010800918,
        0.012487558,
        0.10820005,
        -0.09013623,
        0.01058494,
        -0.020407427,
        0.008856412,
        0.06549262,
        0.037452627,
        -0.06155077,
        0.07951815,
        0.14888431,
        0.0037657553,
        0.04658298,
        0.032695077,
        -0.023968555,
        0.013571467,
        0.031846233,
        -0.15020028,
        0.01507829,
        -0.098498106,
        -0.08525211,
        -0.05687057,
        -0.05679121,
        -0.04017998,
        -0.05893191,
        0.064009905,
        0.04327801,
        0.095328756,
        -0.00088680635
    ],
    "word": "坚持"
}`;

@connect(state => ({
  instruction: state.instruction,
}))
@Form.create()
export default class WordSeg extends React.Component {
  // 清空调用结果框中内容
  componentWillUnmount = () => {
    this.props.dispatch({ type: 'instruction/changeResult', payload: '' });
  }

  // 请求调用能力的api
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields({ force: true },
      (err, values) => {
        if (!err) {
          this.props.dispatch({ type: 'instruction/invokeWord2Vec', payload: values });
        }
      }
    );
  }

  render() {
    const { instruction } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = { labelCol: { span: 24 }, wrapperCol: { span: 24 } };
    return (
      <div>
        <h1>词向量生成</h1>

        <h2>接口描述</h2>
        <p>查询词汇的词向量，实现文本的可计算。</p>

        <h2>请求说明</h2>
        <h3>请求描述</h3>
        <RequestBasicTable data={requestBasicData} />

        <h3>请求参数</h3>
        <RequestBodyTable data={requestBodyData} />

        <h3>请求示例</h3>
        <CodeBlock data={requestCodeData} />

        <h2>返回说明</h2>
        <h3>返回参数</h3>
        <ResponseBodyTable data={responseBodyData} />

        <h3>返回示例</h3>
        <CodeBlock data={responseCodeData} />

        <h2>调用测试</h2>

        <Row gutter={16}>
          <Col span={12}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="输入文本" {...formItemLayout}>
                {getFieldDecorator('text', { rules: [{ required: true, message: '请输入请求参数！' }] })(
                  <Input.TextArea rows={20} style={{ resize: 'none' }} />
                )}
              </Form.Item>
              <Form.Item {...formItemLayout}>
                <Button type="primary" htmlType="submit" loading={instruction.submitting}>提交</Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <Form.Item label="调用结果" {...formItemLayout}>
              <Input.TextArea rows={20} style={{ resize: 'none' }} value={JSON.stringify(instruction.result)} />
            </Form.Item>
          </Col>
        </Row>
      </div>
    );
  }
}
