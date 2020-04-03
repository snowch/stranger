import React, { useState } from 'react'
import { Box, Text, Paragraph, Button, Layer } from 'grommet'
import Kickstart from './Kickstart';

export default () => {
  const remote = window.require('electron').remote;
  const { dialog } = remote;

  const saveIso = (image) => {
    // console.dir(image);
  }
  
  const selectTargetFile = () => {
    dialog.showSaveDialog({
      title: 'Save the boot image',
      defaultPath: 'hpecp_bootimage.iso',
      createDirectory: true,
      showsTagField: false,
      showOverwriteConfirmation: true
    }).then(result => {
      if (result.canceled) console.dir('skipping save...');
      else saveIso(result.filePath)
    }).catch(err => {
      console.dir(err)
    })
  }

  const [show, setShow] = useState(false);
  const getKsValues = (val) => {
    setShow(false);
    console.dir(val);
  }

  return (
    <Box fill="vertical" overflow="auto" align="start" flex="grow" direction="column" justify="start" pad="medium">
      <Text textAlign="start">
        USB Boot Disk for HCP
      </Text>
      <Paragraph>
        You can create a USB boot disk to kick start your server/host with pre-requisites.
        Minimum host requirements as follows;
        # of cores:
        RAM:
        Network:
        Disk space:
          / partition
          /opt partition
          /var partition
          ...
          
      </Paragraph>
      <Button label='Customize kickstart' onClick={() => setShow(true)} />
      <Button label='Select Destination File' onClick={selectTargetFile} />

      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <Kickstart dataCallback={(v) => getKsValues(v)} />
        </Layer>
      )}

      </Box>
  )
  }  