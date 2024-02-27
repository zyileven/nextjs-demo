"use client";

import { BaseParagraph } from "@/app/components/base/BaseParagraph";
import { CodeBlock } from "../../components/CodeBlock";
import { useState } from "react";

export default function Page() {

    const [count, setCount] = useState(0);
    const [clickTime, setClickTime] = useState(0);

	const simpleDebounceText = `
const simpleThrottle = (func: Function, wait: number) => {
    let timer: NodeJS.Timeout | null = null;
    return function (this: any, ...args: any[]) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args)
                timer = null;
            }, wait);
        }
    }
};
    `;

	const simpleThrottle = (func: Function, wait: number) => {
		let timer: NodeJS.Timeout | null = null;
        return function (this: any, ...args: any[]) {
            if (!timer) {
                timer = setTimeout(() => {
                    func.apply(this, args)
                    timer = null;
                }, wait);
            }
        }
	};

    const handleClick = () => {
        setCount(count + 1);
    }

	return (
		<div>
			<h1 className="text-[32px] my-[5px]">throttle</h1>
			<BaseParagraph>节流:n 秒内只运行一次,如果 n 秒内被重复触发,也只执行一次。</BaseParagraph>
			<CodeBlock className="my-[10px]" language="jsx" code={simpleDebounceText} />

            
            <button className="border-[1px] border-[#999] bg-[#eee] py-[5px] px-[5px]" onClick={() => {
                setClickTime(clickTime + 1);
                simpleThrottle(handleClick, 5000)()
            }}>
                点击 +1 
            </button>
            <p>连续点击下方按钮不会变更内容，每 5s 只会更新一次：</p>
            <div>点击次数：{clickTime}</div>
            <div>当前结果：{count}</div>

            

		</div>
	);
}
