import { Fragment, ReactElement, useState, useEffect } from "react";
import FlatList from 'flatlist-react';
import { StartupHttpService } from '../../Http/Startup/Startup.http.service'
import { Startup } from "../../Types/Startup";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StartupItem from "./StartupItem";

export default function StartupList(): ReactElement {

  const [data, setData] = useState<Startup[]>([])

  const getDate = async () => {
    const response = await StartupHttpService.getAllStartup()
    console.log(response)
    setData(response)
  }

  useEffect(() => {
    // Update the document title using the browser API
    getDate()
  }, []);

  return <Fragment>
    <FlatList
      list={data}
      renderItem={(data, ind) => <StartupItem data={data} index={ind} />}
    />
  </Fragment>;
}
