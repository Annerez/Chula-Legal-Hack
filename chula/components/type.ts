export interface NavbarProps {
    className?: string;
}
 
export interface InputFieldProps {
    label: string;
    type?: string;
    placeholder?: string;
    name: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string;
    icon?: React.ReactNode;
  }