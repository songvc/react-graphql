import React from 'react';

const MainBoard = () => {
    const session = useSelector(state => state.session);
    return <div>
        logged in as {session.user.email} 
    </div>
}

export default MainBoard;