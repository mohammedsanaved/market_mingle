/** @format */

import { Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { FiArrowUpRight } from "react-icons/fi";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { defaultTheme } from "../../../constants/theme/theme";
import SecondaryButton from "../../inputs/SecondaryButton";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  image: ImageProps;
  tagline?: string;
  heading?: string;
  description?: string;
  button: ButtonProps;
};

type ContactData = {
  startHeading: string;
  colorHeading: string;
  endHeading: string;
};

export type Contact7Props = React.ComponentPropsWithoutRef<"section"> & {
  data: ContactData;
};

export const Contact7 = ({ data }: Contact7Props) => {
  const { image } = {
    ...Contact7Defaults,
  };
  const { startHeading, colorHeading, endHeading } = data;

  // Validation schema using Yupphone & company are optional.
  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Business Email is required"),
    message: Yup.string().required("Message is required"),
    acceptTerms: Yup.boolean().oneOf([true], "You must accept the terms"),
    phone: Yup.string(),
    company: Yup.string(),
  });

  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20'>
        <div style={{ fontFamily: defaultTheme.fonts.poppins.join(",") }}>
          <div className='mb-6 md:mb-8'>
            <h2
              style={{ fontFamily: defaultTheme.colors.tertiary }}
              className='mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl'
            >
              {startHeading}{" "}
              <span
                className='text-[3.2rem] md:text-[4rem] lg:text-[5rem]'
                style={{
                  color: defaultTheme.colors.tertiary,
                  fontFamily: defaultTheme.fonts.niconne.join(","),
                }}
              >
                {colorHeading}
              </span>
              <br />
              {endHeading}
            </h2>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              company: "",
              message: "",
              acceptTerms: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              console.log(values, "------------------values");
              actions.setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form className='grid grid-cols-1 gap-6'>
                {/* Full Name */}
                <div className='grid w-full items-center'>
                  <Label htmlFor='name' className='mb-2'>
                    Full Name <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Field name='name'>
                    {({ field }: { field: any }) => (
                      <Input
                        {...field}
                        type='text'
                        id='name'
                        placeholder='Full Name'
                        style={{
                          backgroundColor: defaultTheme.backgrounds.secondary,
                          borderColor: defaultTheme.colors.Paragraphtext,
                        }}
                        className='w-full rounded-tr-xl rounded-bl-xl p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                      />
                    )}
                  </Field>
                  {errors.name && touched.name && (
                    <div className='text-red-500 text-sm'>{errors.name}</div>
                  )}
                </div>
                {/* Business Email and Phone Number */}
                <div className='grid w-full gap-6 md:grid-cols-2'>
                  <div className='grid w-full items-center'>
                    <Label htmlFor='email' className='mb-2'>
                      Business Email <span style={{ color: "red" }}>*</span>
                    </Label>
                    <Field name='email'>
                      {({ field }: FieldProps<any>) => (
                        <Input
                          {...field}
                          type='email'
                          id='email'
                          placeholder='Business Email'
                          style={{
                            backgroundColor: defaultTheme.backgrounds.secondary,
                            borderColor: defaultTheme.colors.Paragraphtext,
                          }}
                          className='w-full rounded-tr-xl rounded-bl-xl p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                        />
                      )}
                    </Field>
                    {errors.email && touched.email && (
                      <div className='text-red-500 text-sm'>{errors.email}</div>
                    )}
                  </div>
                  <div className='grid w-full items-center'>
                    <Label htmlFor='phone' className='mb-2'>
                      Phone Number
                    </Label>
                    <Field name='phone'>
                      {({ field }: FieldProps<any>) => (
                        <Input
                          {...field}
                          type='text'
                          id='phone'
                          placeholder='Phone Number'
                          style={{
                            backgroundColor: defaultTheme.backgrounds.secondary,
                            borderColor: defaultTheme.colors.Paragraphtext,
                          }}
                          className='w-full rounded-tr-xl rounded-bl-xl p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                        />
                      )}
                    </Field>
                  </div>
                </div>
                {/* Company Name */}
                <div className='grid w-full items-center'>
                  <Label htmlFor='company' className='mb-2'>
                    Company Name
                  </Label>
                  <Field name='company'>
                    {({ field }: FieldProps<any>) => (
                      <Input
                        {...field}
                        type='text'
                        id='company'
                        placeholder='Company Name'
                        style={{
                          backgroundColor: defaultTheme.backgrounds.secondary,
                          borderColor: defaultTheme.colors.Paragraphtext,
                        }}
                        className='w-full rounded-tr-xl rounded-bl-xl p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                      />
                    )}
                  </Field>
                </div>
                {/* Message */}
                <div className='grid w-full items-center'>
                  <Label htmlFor='message' className='mb-2'>
                    Message <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Field name='message'>
                    {({ field }: FieldProps<any>) => (
                      <Textarea
                        {...field}
                        id='message'
                        placeholder='Type your message...'
                        style={{
                          backgroundColor: defaultTheme.backgrounds.secondary,
                          borderColor: defaultTheme.colors.Paragraphtext,
                        }}
                        className='w-full rounded-tr-xl rounded-bl-xl p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[11.25rem] overflow-auto'
                      />
                    )}
                  </Field>
                  {errors.message && touched.message && (
                    <div className='text-red-500 text-sm'>{errors.message}</div>
                  )}
                </div>
                {/* Terms Checkbox */}
                <div className='mb-3 flex items-center space-x-2 text-sm md:mb-4'>
                  <Field name='acceptTerms' type='checkbox'>
                    {({ field }: FieldProps<any>) => (
                      <Checkbox
                        {...field}
                        id='terms'
                        checked={field.value}
                        onCheckedChange={(checked) =>
                          field.onChange({
                            target: { name: field.name, value: checked },
                          })
                        }
                      />
                    )}
                  </Field>
                  <Label htmlFor='terms' className='cursor-pointer'>
                    I accept the{" "}
                    <a className='text-link-primary underline' href='#'>
                      Terms
                    </a>{" "}
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  {errors.acceptTerms && touched.acceptTerms && (
                    <div className='text-red-500 text-sm'>
                      {errors.acceptTerms}
                    </div>
                  )}
                </div>
                {/* Submit Button */}
                <div>
                  <SecondaryButton
                    endIcon={<FiArrowUpRight />}
                    sx={{
                      color: defaultTheme.colors.tertiary,
                      fontWeight: 500,
                    }}
                    type='submit'
                  >
                    Submit
                  </SecondaryButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <img
            src={image.src}
            alt={image.alt}
            className='size-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export const Contact7Defaults: Props = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  button: { title: "Submit" },
};
