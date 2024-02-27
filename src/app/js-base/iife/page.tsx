"use client"
import { BaseParagraph } from "@/app/components/base/BaseParagraph";
import { CodeBlock } from "../../components/CodeBlock";
import { useEffect } from "react";

const code1 = `
(function() {
    // 代码
})();
`

const code2 = `
(
    function(j){ // 这里的 j 就是接受的外面的 i
        //代码中可以使用j 
        console.log("j:", j) // 输出 i
    }
)(i) 

`

export default function Page() {
    useEffect(() => {
        (
            function(j){ // 这里的 j 就是接受的外面的 i
                //代码中可以使用j 
                console.log("j:", j)
            }
        )(10) 
    }, [])


    return <div>
        <h1 className="text-[32px] my-[5px] text-center">IIFE</h1>

        <BaseParagraph className="text-[24px] font-bold">一、什么是立即执行函数？</BaseParagraph>

        <CodeBlock language="js" code={code1} />

        <BaseParagraph className="text-[24px] font-bold">二、立即执行函数的作用</BaseParagraph>
        <ul>
            <li>1.不必为函数命名，避免了污染全局变量 </li>
            <li>2.立即执行函数内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量</li>
            <li>3.封装变量</li>
            <li>总而言之：立即执行函数会形成一个单独的作用域，我们可以封装一些临时变量或者局部变量，避免污染全局变量</li>
        </ul>

        <BaseParagraph className="text-[24px] font-bold">三、立即执行函数的参数</BaseParagraph>

        <BaseParagraph className="my-[10px]">如果立即执行函数中需要全局变量，全局变量会被作为一个参数传递给立即执行函数</BaseParagraph>

        <CodeBlock language="js" code={code2}></CodeBlock>
    </div>
}