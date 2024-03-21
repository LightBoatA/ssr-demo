import React from 'react';

function Home() {
    return (
        <div>
            <h1>hello, holiday</h1>
            <button onClick={() => { alert(666)}}>点击弹出消息</button>
        </div>
    );
}

export default Home;
