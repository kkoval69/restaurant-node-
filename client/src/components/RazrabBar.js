import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Row} from "react-bootstrap";

const RazrabBar = observer(() => {
    const {game} = useContext(Context)

    return (
        <div className="btn-group btn-group-toggle d-flex pb-3">
            {game.razrabs.map(razrab =>

                <Button

                    className="p-3"
                    variant={'outline-info'}
                    style={{cursor:'pointer'}}
                    key={razrab.id}
                    onClick={() => game.setSelectedRazrab(razrab)}
                    border={razrab.id === game.selectedRazrab.id ? 'danger' : 'light'}
                >
                    {razrab.name}
                </Button>
            )}
        </div>
    );
});

export default RazrabBar;
