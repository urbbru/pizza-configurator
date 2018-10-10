import * as React from 'react'
import {basePizza, sauce, toppings, turboDroneDelivery} from '../lib/pizzaData'
import pizza from '../pizza.svg'
import { Row, Col, Button, Select, Form, Switch, Radio, Card } from 'antd'
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button
const Option = Select.Option;



export default function PizzaConfig(props) {
    const showPrice = () => {
        if (props.order.price > 0) {
              return <span className="price">{props.order.price}</span>
        }
        return <span className="price">0</span>
    }
    return (
        <div>
            <Row id="header">
                <Col span={24}><img src={pizza} className="logo" alt="logo" /></Col>
            </Row>

            <Row type="flex" justify="space-around">
                <Col span={10}>
                    <Card
                        title="Your pizza"
                        extra={<Button onClick={props.onSubmit}>Order</Button>}
                        style={{ width: 300 }}
                    >
                        <p id="errMsg"></p>
                        <p id="totalPrice">Your pizza will cost: {showPrice()}</p>
                    </Card>
                </Col>
                <Col span={10}>
                    <Form>

                        <FormItem label="Choose your base pizza(*)">  
                            <RadioGroup onChange={props.onChange}>
                            {basePizza.map(base => {
                                return <RadioButton key={base.value} value={base.value}>{base.value}</RadioButton>
                            })}
                            </RadioGroup>
                        </FormItem>

                        <FormItem label="Choose your sauce(*)">  
                            <RadioGroup onChange={props.onChange}>
                            {sauce.map(sauce => {
                                return <RadioButton key={sauce.value} value={sauce.value}>{sauce.value}</RadioButton>
                            })}
                            </RadioGroup>
                        </FormItem>

                        <FormItem label="Choose your toppings">
                            <Select
                                mode="multiple"
                                placeholder="Please select"
                                onChange={props.onChange}
                                value={props.order.toppings}
                            >
                            {toppings.map(base => {
                                return <Option key={base.value}>{base.value}</Option>
                            })}
                            </Select>
                        </FormItem>

                        <FormItem label="Turbo drone delivery?(This will increase the total price with 10%)">  
                            <Switch onChange={props.onChange}/>
                        </FormItem>

                    </Form>
                </Col>
            </Row>
        </div>
    )  
}