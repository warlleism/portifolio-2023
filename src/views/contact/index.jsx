import { ToastContainer, toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typewriter } from 'react-simple-typewriter'
import imgContact from '../../assets/contact.png'
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './component/spinner';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import './style.scss';


const schema = z.object({
    assunto: z.string().min(1, { message: 'Assunto é obrigatório' }).max(255, { message: 'Nome deve ter no máximo 255 caracteres' }),
    remetente: z.string().email({ message: 'E-mail inválido' }),
    descricao: z.string().max(500, { message: 'Descrição deve ter no máximo 500 caracteres' }).optional(),
});


const Contacts = () => {

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        const dados = {
            remetente: data.remetente,
            assunto: data.assunto,
            descricao: data.descricao
        };

        try {
            const response = await axios.post('https://send-email-python.vercel.app/enviar-email', dados);
            toast("Mensagem enviada com sucesso!")
            reset();
            setLoading(false)
        } catch (error) {
            console.error('Erro ao enviar a requisição:', error);
            toast("Ops! algo deu errado.")
            setLoading(false)
        }
    };



    return (
        <div id="contacts">
            <div className='textTitle text'>Contato</div>
            <div className='main-contact-container'>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className='container-input'>
                        <div className='text-container'>Assunto:</div>
                        <input type='text' {...register('assunto')} />
                        {errors.assunto && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.assunto.message}</span>}
                    </div>

                    <div className='container-input' >
                        <div className='text-container'>Email:</div>
                        <input type='text' {...register('remetente')} />
                        {errors.remetente && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.remetente.message}</span>}
                    </div>

                    <div className='container-textarea'>
                        <div className='text-container'>Descrição:</div>
                        <textarea rows={10} {...register('descricao')} />
                        {errors.descricao && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.descricao.message}</span>}
                    </div>

                    <button type='submit'
                        className='flex flex-row justify-center items-center'>
                        <Spinner value={loading} />
                        {
                            !loading ? 'Enviar' : null
                        }

                    </button>
                </form>
                <div className='container-img-content'>
                    <div className='container-img'
                        style={{ backgroundImage: `url(${imgContact})` }}
                    >
                        <div className='text-[#fff] w-[60%] W-[100%] flex justify-center font-extrabold 2xl:text-[4rem] xl:text-[3rem] '>
                            <Typewriter
                                words={["TECNOLOGIA", "CÓDIGO", "PROGRAMAR", "ALGORITMO", "DESENVOLVER", "DEPURAR", "COMPILAR", "INTERFACE", "ESTRUTURA", "BIBLIOTECA", "DEPENDÊNCIA", "ITERAR", "DEPLOY"]}
                                loop={100}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={2000}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div >
    );
};

export default Contacts;
