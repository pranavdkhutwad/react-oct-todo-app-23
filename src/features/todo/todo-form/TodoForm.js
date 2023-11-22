import { useForm, Controller } from "react-hook-form";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TodoForm({ onAdd }) {
  // const [task, setTask] = useState({
  //   name: "",
  //   desc: "",
  //   priority: "",
  // });
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    name: "",
    desc: "",
    priority: "",
  });

  const onSubmit = (data) => {
    onAdd(data);
    reset({ name: "", desc: "", priority: "" });
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Task name</Form.Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Task name" />
              )}
            />
            {errors?.name?.type === "required" && (
              <small className="text-danger">Field is required</small>
            )}
            {errors?.name?.type === "minLength" && (
              <small className="text-danger">
                Minimum 3 characters are required
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Task description</Form.Label>
            <Controller
              name="desc"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  placeholder="Task description"
                  rows={3}
                />
              )}
            />
            {errors?.desc?.type === "required" && (
              <small className="text-danger">Field is required</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="priority">
            <Form.Label>Task priority</Form.Label>
            <Controller
              name="priority"
              control={control}
              rules={{ required: true, pattern: /[1-3]/ }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="number"
                  placeholder="Task priority"
                />
              )}
            />
            {errors?.priority?.type === "required" && (
              <small className="text-danger">Field is required</small>
            )}
            {errors?.priority?.type === "pattern" && (
              <small className="text-danger">
                Priority should be 1, 2 or 3
              </small>
            )}
          </Form.Group>
          <div className="d-grid">
            <Button variant="success" type="submit">
              Add task
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TodoForm;
