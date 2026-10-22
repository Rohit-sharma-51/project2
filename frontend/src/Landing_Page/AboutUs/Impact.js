import { useEffect, useRef, useState } from "react";

function Counter({ target }) {
    const [count, setCount] = useState(0);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 8000; // 2 sec
                    const increment = target / (duration / 16);

                    const counter = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(counter);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);

                    observer.disconnect(); // run only once
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [target]);

    return <h3 ref={ref} style={{ color: "#219653", fontSize: "2.5rem" }}>
        {count.toLocaleString()}
    </h3>;
}

function Impact() {
    return (
        <div className="container colors">
            <div className="row mt-4">
                <h1 className="text-center mt-5 mb-5" style={{ color: "#219653" }}>
                    Our Impact
                </h1>

                <div className="col text-center">
                    <Counter target={56595} />
                    <h5 className="text-muted">Contracts Signed</h5>
                </div>

                <div className="col text-center">
                    <Counter target={20000} />
                    <h5 className="text-muted">Farmers Empowered</h5>
                </div>

                <div className="col text-center">
                    <Counter target={1000} />
                    <h5 className="text-muted">Buyers Connected</h5>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h1 className="text-center mt-5" style={{ color: "#219653" }}>
                        Join Our Mission
                    </h1>
                    <p className="text-muted mt-4" style={{ fontSize: "1.2rem" }}>
                        Whether you're a farmer or buyer, KrishiConnect is here to empower you with secure, efficient, and transparent farming contracts.
                    </p>

                    <div className="text-center">
                        <button className="btn btn-success px-5 mb-4">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Impact;