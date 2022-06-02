import React from 'react';
import { Inputbar } from './Createinputbar';
import { Indexbutton } from './setindexbutton';
import { useNavigate } from 'react-router-dom';
import { Start } from './Start';
import { group } from 'console';

export const Listinputbar = () => {
    const navigate = useNavigate();
    const [member, setmember] = React.useState<string[]>(["マーシー","しゅんき","しゅんや","きょうへい","わかな"])
    const [barindex, setbarindex] = React.useState(member.length)
    const [people, setpeople] = React.useState(0)


    const handlegroupchangeup = () => {
        setpeople(people + 1)
    }
    const handlegroupchangedown = () => {
        if (people <= 0) {
            
        } else {
            setpeople(people - 1)
        }
    }



    const handlechange = () => {
        if (people <= 0 || people > barindex) {
            alert("グループ数が不正です")
        } else {
            navigate("/result", { state: { member: member, group: people } })
        }
    }
    
    
    return (
        <div className='app'>
            <div>
                {
                    (function () {
                        const list = [];
                        for (let i = 0; i < barindex; i++) {
                            list.push(<Inputbar key={i} index={i} handlechange={setmember} statevalue={member} barindex={barindex} handlechangeindex={setbarindex}></Inputbar>);
                        }
                        return <ul>{list}</ul>;
                    }())
                }
            </div>
            <Indexbutton handlechangeindex={setbarindex} handleindex={barindex}></Indexbutton>
            <Start people={people} handlegroupchangedown={handlegroupchangedown} handlegroupchangeup={handlegroupchangeup}></Start>
            <button onClick={handlechange}>結果を見る</button>
        </div>
        
    )
}