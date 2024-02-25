"use client";
import { useEffect, useRef } from "react"

export default function Page() {
    const dom1 = useRef<HTMLDivElement>(null)
    const dom2 = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (dom1.current == null || dom2.current == null) {
            return;
        }
        console.log(dom1.current.style.marginLeft);
        console.log(dom2.current.style.marginLeft);

        let dom1Position = 0

        const interval = setInterval(() => {
            if (dom1.current == null) {
                return;
            }
            if (dom1Position < 200) {
                dom1Position += 1;
            }

            if (dom1Position >= 200) {
                clearInterval(interval);
            }

            dom1.current.style.marginLeft = `${dom1Position}px`;
        }, 0);

        let dom2Position = 0;

        function animate() {
            if (dom2.current == null) {
                return;
            }
            if (dom2Position >= 200) {
                return;
            }
            dom2Position += 1;
            dom2.current.style.marginLeft = `${dom2Position}px`;
            window.requestAnimationFrame(animate)
        }

        window.requestAnimationFrame(animate);

        return () => clearInterval(interval);



    }, [dom1, dom2])


    return <div>
        app/dashboard/setting/page.tsx
        <div ref={dom1} className="w-[100px] h-[100px] bg-red-500">
            1
        </div>
        <div ref={dom2} className="w-[100px] h-[100px] bg-red-500">
            2
        </div>
    </div>
}