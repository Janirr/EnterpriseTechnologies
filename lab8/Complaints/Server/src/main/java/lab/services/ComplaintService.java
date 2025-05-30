package lab.services;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import lab.data.ComplaintRepository;
import lab.dto.ComplaintDTO;
import lab.entities.Complaint;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import java.util.List;
import java.lang.reflect.Type;
import jakarta.transaction.Transactional;

@ApplicationScoped
public class ComplaintService {
    @Inject
    private ComplaintRepository repository;

    @Transactional
    public void create(ComplaintDTO dto) {
        ModelMapper mapper = new ModelMapper();
        repository.create(mapper.map(dto, Complaint.class));
    }

    @Transactional
    public void edit(ComplaintDTO dto) {
        ModelMapper mapper = new ModelMapper();
        repository.edit(mapper.map(dto, Complaint.class));
    }

    @Transactional
    public void remove(Long id) {
        Complaint complaint = repository.find(id);
        if (complaint != null) {
            repository.remove(complaint);
        }
    }

    @Transactional
    public ComplaintDTO find(Long id) {
        Complaint complaint = repository.find(id);
        if (complaint != null) {
            ModelMapper mapper = new ModelMapper();
            return mapper.map(complaint, ComplaintDTO.class);
        }
        return null;
    }

    @Transactional
    public List<ComplaintDTO> findAll() {
        ModelMapper mapper = new ModelMapper();
        List<Complaint> entityList = repository.findAll();
        Type listType =
                new TypeToken<List<ComplaintDTO>>() {}.getType();
        List<ComplaintDTO> dtoList =
                mapper.map(entityList, listType);
        return dtoList;
    }
}
