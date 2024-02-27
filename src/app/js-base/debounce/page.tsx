"use client";

import { BaseParagraph } from "@/app/components/base/BaseParagraph";
import { CodeBlock } from "../../components/CodeBlock";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Page() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [clickTime, setClickTime] = useState(0);
    const [clickTime2, setClickTime2] = useState(0);
    const timerRef = useRef();
    const simpleDebounceText = `
const simpleDebounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;

    return function (this: unknown, ...args: any[]) {
        let context = this;
        //  每次重新触发清除上一次的定时器
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
};
    `;

    const debounceImmediateText = `
const debounceImmediate = (func: { apply: (arg0: unknown, arg1: any[]) => void; }, wait: number | undefined, immediate: boolean) => {
    let timeout: NodeJS.Timeout;

    return function (this: unknown, ...args: any[]) {
        // 判断是否是第一次执行
        const callNow = immediate && !timeout;
        if (callNow) func.apply(this, args)
        // 后续的任何一次执行都要清除上一次的定时器，并重新设置定时器
        clearTimeout(timeout);
        // 接收最新的定时器
        timeout = setTimeout(() => {
            // 执行 this 绑定并执行
            func.apply(this, args)
            // 执行完后清楚定时器
            clearTimeout(timeout);
        }, wait);
    }
}
    `

    const simpleDebounce = (func: Function, wait: number) => {
        let timeout: NodeJS.Timeout;
        return function (this: unknown, ...args: any[]) {
            let context = this;
            clearTimeout(timeout);
            timeout = setTimeout(function () { // 在 5s 区间的时间里，先等下 5s 再执行
                func.apply(context, args);
            }, wait);
        };
    };


    const debounceImmediate = useCallback((func: { apply: (arg0: unknown, arg1: any[]) => void }, wait: number | undefined, immediate: boolean) => {
        let timer: NodeJS.Timeout | null;
        return function (this: any, ...args: any[]) {
            let context = this;
            let callNow = immediate && !timer;

            console.log(timer, callNow)

            clearTimeout(timer as NodeJS.Timeout)
            timer = setTimeout(() => {
                timer = null;
                if (!immediate) {
                    func.apply(context, args)
                }
            }, wait);
            if (callNow) func.apply(context, args)
        }
    }, [])


    useEffect(() => {
        window.addEventListener("resize", debounceImmediate(handleClick2, 5000, true))
    }, [count2])

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleClick2 = () => {
        // console.log(count2)
        // setCount2(count2 + 1);
        console.log("变更了")
    }

    return (
        <div className="w-[100%]">
            <h1 className="text-[32px] my-[5px]">debounce</h1>
            <BaseParagraph>防抖：n 秒后再执行某个事件，如果在 n 秒内被重复触发，则重新计时。</BaseParagraph>

            <h3>简单的防抖</h3>

            <CodeBlock className="my-[10px] max-w-[100%] w-[100%] overflow-auto" language="jsx" code={simpleDebounceText} />
            <button className="border-[1px] border-[#999] bg-[#eee] py-[5px] px-[5px]" onClick={() => {
                setClickTime(clickTime + 1);
                simpleDebounce(handleClick, 5000)()
            }}>
                点击 +1
            </button>
            <p>连续点击下方按钮不会变更内容，除非点击之后等下 5s 才会变更：</p>
            <div>点击次数：{clickTime}</div>
            <div>当前结果：{count}</div>

            <h3>第一次快速执行防抖</h3>

            <CodeBlock className="my-[10px] max-w-[100%] w-[100%] overflow-auto" language="jsx" code={debounceImmediateText} />
            <button className="border-[1px] border-[#999] bg-[#eee] py-[5px] px-[5px]" onClick={() => {
                setClickTime2(clickTime2 + 1);
                debounceImmediate(handleClick2, 5000, true)()
            }}>
                点击 +1
            </button>
            <p>连续点击下方按钮不会变更内容，除非点击之后等下 5s 才会变更：</p>
            <div>点击次数：{clickTime2}</div>
            <div>当前结果：{count2}</div>

        </div>
    );
}
