import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DynamicFormProps } from "../types/Type";


const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit, buttonText }) => {
  // Create validation schema dynamically
  const validationSchema = Yup.object(
    fields.reduce((schema, field) => {
      let validator = Yup.string();

      if (field.validation.required) {
        validator = validator.required(field.validation.message);
      }
      if (field.validation.min !== undefined) {
        validator = validator.min(field.validation.min, field.validation.message);
      }
      if (field.validation.pattern) {
        validator = validator.matches(field.validation.pattern, field.validation.message);
      }

      schema[field.name] = validator;
      return schema;
    }, {} as Record<string, Yup.AnySchema>)
  );

  // Create initial values dynamically
  const initialValues = fields.reduce((values, field) => {
    values[field.name] = "";
    return values;
  }, {} as Record<string, string | number>);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values); // Pass form values to parent on submit
      }}
    >
      {() => (
        <Form className="p-4 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {fields.map((field) => (
              <div key={field.name} className="w-full">
                <label
                  htmlFor={field.name}
                  className="block text-gray-700 font-medium mb-2"
                >
                  {field.label}
                </label>
                <Field
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {buttonText} {/* Dynamically rendered button text */}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;