import { Card, CardBody,Form, Input,Label, FormGroup, Col , Button  } from "reactstrap";

const AddPost = () => (
 
  <FormGroup row>
    <Label
      for="exampleText"
      sm={2}
    >
      Text Area
    </Label>
    <Col sm={10}>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
          <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
<Button  >
  Submit
</Button>

    </Col>
  </FormGroup>
 
);

export default AddPost;
