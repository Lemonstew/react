import React from "react";
import { Button } from "@chakra-ui/react";

function MyApp26(props) {
  return (
    <div>
      <Button size="xl">click</Button>
      <Button size="lg">click</Button>
      <Button size="md">click</Button>
      <Button size="sm">click</Button>
      <Button size="xs">click</Button>
      <hr />
      <Button variant="solid">click</Button>
      <Button variant="subtle">click</Button>
      <Button variant="ghost">click</Button>
      <Button variant="plain">click</Button>
      <Button variant="">click</Button>
      <Button variant="">click</Button>
      <hr />
      <Button loading>click</Button>
      <Button loading={true}>click</Button>
      <Button>click</Button>
      <Button loading={false}>click</Button>
      <hr />
      <Button loading loadingText="uploading">
        click
      </Button>
      <Button loading={true} loadingText="uploading">
        click
      </Button>
    </div>
  );
}

export default MyApp26;
