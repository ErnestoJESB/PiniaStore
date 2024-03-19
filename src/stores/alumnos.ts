import type IStudent from '@/interfaces/IStudent'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'

const url = 'https://65e8dab54bb72f0a9c508303.mockapi.io/dev/api' || 'http://localhost:3000/'

export const useAlumnosStore = defineStore('alumno', () => {
    const students: Ref<IStudent[]> = ref([])
    const student: Ref<IStudent | null> = ref(null)

    function setStudents(data: IStudent[]) {
        students.value = data
        return students.value
    }
    function setStudent(data: IStudent) {
        student.value = data
    }
    return {
        GetStudents,
        setStudents
    }
    async function GetStudents() {
        try {
            const json = await fetch(url + '/Alumnos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const response = await json.json()
            setStudents(response)
            return response
        } catch (e) {
            console.log(e)
        }
    }


})