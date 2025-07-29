import React, { useState } from 'react'

const Input: React.FC<{
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
    name?: string;
    error?: string;
}> = ({
    placeholder = "Введите ваш запрос",
    onChange,
    value,
    type = "text",
    name,
    error
}) => {
        return (
            <div className="flex flex-col items-center">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={`w-[345px] px-6 py-4 border-2 rounded-[30px] text-center placeholder-black text-sm outline-none bg-transparent transition-all duration-300 ${error ? 'border-red-700' : 'border-black'
                        }`}
                    onChange={onChange}
                    value={value}
                />
                {error && (
                    <span className="text-red-700 text-xs font-semibold mt-1">{error}</span>
                )}
            </div>
        );
    };

interface FormData {
    name: string;
    lastname: string;
}

interface FormErrors {
    name?: string;
    lastname?: string;
}

const Request = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        lastname: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Валидация имени
        if (!formData.name.trim()) {
            newErrors.name = 'Имя обязательно для заполнения';
        }

        // Валидация фамилии
        if (!formData.lastname.trim()) {
            newErrors.lastname = 'Фамилия обязательна для заполнения';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Очищаем ошибку при вводе
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Здесь можно добавить реальную отправку данных на сервер
            // Например: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

            // Имитация отправки
            await new Promise(resolve => setTimeout(resolve, 2000));

            setIsSubmitted(true);
            setFormData({
                name: '',
                lastname: '',
            });
            setErrors({});
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            setErrors({ name: 'Произошла ошибка при отправке. Попробуйте еще раз.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className='my-40 w-[880px] rounded-[30px] flex flex-col items-center gap-4 py-14 mx-auto bg-green-100 border-2 border-green-500'>
                <div className="text-center">
                    <h2 className='text-4xl font-bold text-green-700 mb-4'>Спасибо!</h2>
                    <p className='text-xl text-green-600'>Ваша заявка успешно отправлена.</p>
                    <p className='text-lg text-green-500 mt-2'>Мы свяжемся с вами в ближайшее время.</p>
                </div>
            </div>
        );
    }

    return (
        <form
            data-aos='fade-up'
            onSubmit={handleSubmit}
            className='my-40 w-[880px] rounded-[30px] flex flex-col items-center gap-4 py-14 mx-auto'
            style={{
                background: 'linear-gradient(180deg, #D9D9D9 0%, #C1C1C1 32.5%, #A4A4A4 70.5%, #868686 88.5%, #737373 100%)',
                boxShadow: 'inset 4px - 4px 0.4px - 12px #000000',
            }}
        >

            <p className='text-[100px] font-bold mb-[30px]'>ЗАЯВКА</p>

            <Input
                name="name"
                placeholder="ПОЛНОЕ ИМЯ"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
            />

            <Input
                name="lastname"
                type="name"
                placeholder="ФАМИЛИЯ"
                value={formData.lastname}
                onChange={handleInputChange}
                error={errors.lastname}
            />

            <button
                type="submit"
                disabled={isSubmitting}
                className={`text-xl font-semibold rounded-[30px] px-8 py-4 transition-all duration-300 ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-thlightgreen hover:bg-thgreen'
                    }`}
            >
                {isSubmitting ? 'ОТПРАВКА...' : 'ОСТАВИТЬ ЗАЯВКУ'}
            </button>
        </form>
    )
}

export default Request