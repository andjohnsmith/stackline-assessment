import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Sale } from './salesSlice'

interface SalesGraphProps {
    sales: Sale[]
}

const SalesGraph = ({ sales }: SalesGraphProps) => {
    const formatDate = (date: string): string => {
        return isFirstWeekOfMonth(date) ? getMonthLabel(date) : ''
    }

    const isFirstWeekOfMonth = (date: string): boolean => {
        return date.charAt(8) === '0' && Number(date.charAt(9)) < 8
    }

    const getMonthLabel = (date: string): string => {
        switch (date.substring(5, 7)) {
            case ('01'):
                return 'JAN'
            case ('02'):
                return 'FEB'
            case ('03'):
                return 'MAR'
            case ('04'):
                return 'APR'
            case ('05'):
                return 'MAY'
            case ('06'):
                return 'JUN'
            case ('07'):
                return 'JUL'
            case ('08'):
                return 'AUG'
            case ('09'):
                return 'SEP'
            case ('10'):
                return 'OCT'
            case ('11'):
                return 'NOV'
            case ('12'):
                return 'DEC'
            default:
                return ''
        }
    }
      
    return (
        <div className="sales-graph">
            <h2>Retail Sales</h2>
            <ResponsiveContainer width="100%" height={700} minWidth="600px">
                <LineChart data={sales}>
                    <Line type="monotone" dataKey="retailSales" stroke="#269ff5" />
                    <Line type="monotone" dataKey="wholesaleSales" stroke="#8f9cb6" />
                    <XAxis
                        dataKey="weekEnding"
                        tickLine={false}
                        interval={0}
                        tickFormatter={date => formatDate(date)}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis domain={[0, 'dataMax + 1000']} hide={true} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SalesGraph