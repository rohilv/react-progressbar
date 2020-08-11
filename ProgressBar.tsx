/*  @author Rohil Visariya
    @description ProgressBar Indicator
    @created 10 Aug 2020
 */
import React from 'react';

interface ifPercentage {
    percentage: string | number
    totalValue: never
    completedValue: never
}

interface ifOutOf {
    percentage: never
    totalValue: number
    completedValue: number
}

type Props = {
    completedValue: number,
    totalValue: number,
    percentage: string | number,
    height?: number,
    color?: string,
    labelColor?: string,
    prefixLabelText?: string | any,
    suffixLabelText?: string | any
}

export default function Progressbar(
    {
        height = 20,
        color,
        labelColor = '#ffffff',
        percentage,
        completedValue,
        totalValue,
        prefixLabelText,
        suffixLabelText
    }: Props
) {

    let percent = percentage ? percentage : ((completedValue * 100) / totalValue);

    const containerStyles = {
        height: height,
        width: '100%',
        backgroundColor: "#dddddd",
        textAlign: 'left' as const
    }

    const fillerStyles = {
        height: '100%',
        width: `${percent}%`,
        backgroundColor: color,
        textAlign: 'center' as const,
        transition: 'width 1s ease-in-out',
    }

    const labelStyles = {
        padding: 5,
        display: 'inline-flex',
        alignItems: 'middle',
        height: height,
        color: `${labelColor}`,
        fontWeight: 700,
        fontSize: '100%',
        lineHeight: '1.2em'
    }
    return (
        <div className="ProgressBar" style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>
                    {prefixLabelText ? prefixLabelText : null}
                    {percentage ? ` ${percent}% ` : ` ${completedValue} / ${totalValue} `}
                    {suffixLabelText ? suffixLabelText : null}
                </span>
            </div>
        </div>
    );
}
